const boxes = Array.from(document.querySelectorAll(".box"));
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");
const modeBtn = document.querySelector("#mode-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const statusEl = document.querySelector("#game-status");
const timerValueEl = document.querySelector("#timer-value");
const scoreOEl = document.querySelector("#score-o");
const scoreXEl = document.querySelector("#score-x");
const scoreDrawEl = document.querySelector("#score-draw");
const historyListEl = document.querySelector("#history-list");

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

let turnO = true;
let singlePlayerMode = false;
let gameActive = true;
let timerId;
let secondsLeft = 10;
let scores = { O: 0, X: 0, draw: 0 };
let gameHistory = [];
const initialTimer = 10;
let audioContext;

const ensureAudio = () => {
  if (!audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioContext = AudioCtx ? new AudioCtx() : null;
  }

  if (audioContext && audioContext.state === "suspended") {
    audioContext.resume();
  }
};

const playSound = (type) => {
  ensureAudio();
  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  const frequencies = {
    move: 440,
    win: 660,
    draw: 520,
    timeout: 280,
  };

  oscillator.type = "sine";
  oscillator.frequency.value = frequencies[type] || 440;
  gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.0001,
    audioContext.currentTime + 0.25,
  );
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.25);
};

const updateScoreboard = () => {
  scoreOEl.textContent = scores.O;
  scoreXEl.textContent = scores.X;
  scoreDrawEl.textContent = scores.draw;
};

const updateStatus = (message = "") => {
  if (message) {
    statusEl.textContent = message;
    return;
  }

  if (singlePlayerMode) {
    statusEl.textContent = turnO ? "Your turn (O)" : "AI is thinking...";
  } else {
    statusEl.textContent = turnO ? "Player O's turn" : "Player X's turn";
  }
};

const startTimer = () => {
  clearInterval(timerId);
  if (!gameActive) return;

  secondsLeft = initialTimer;
  timerValueEl.textContent = secondsLeft;

  timerId = setInterval(() => {
    secondsLeft -= 1;
    timerValueEl.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerId);
      handleTimeout();
    }
  }, 1000);
};

const addHistoryEntry = (result) => {
  const timestamp = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  const entry = document.createElement("li");
  entry.textContent = `${result} • ${timestamp}`;
  historyListEl.prepend(entry);

  while (historyListEl.children.length > 6) {
    historyListEl.removeChild(historyListEl.lastChild);
  }
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("winning-cell");
  });
};

const showResult = (message) => {
  msg.innerText = message;
  msgContainer.classList.remove("hide");
};

const highlightPattern = (pattern) => {
  pattern.forEach((index) => {
    boxes[index].classList.add("winning-cell");
  });
};

const handleGameOver = (result, pattern = []) => {
  gameActive = false;
  clearInterval(timerId);
  if (pattern.length) highlightPattern(pattern);
  disableBoxes();

  if (result === "draw") {
    scores.draw += 1;
    updateScoreboard();
    addHistoryEntry("Draw");
    showResult("It's a draw!");
    playSound("draw");
    return;
  }

  if (result === "O") {
    scores.O += 1;
  } else {
    scores.X += 1;
  }

  updateScoreboard();
  addHistoryEntry(result === "O" ? "You win" : "X wins");
  showResult(result === "O" ? "You win!" : "X wins!");
  playSound("win");
};

const checkWinner = (mark) => {
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      boxes[a].innerText === mark &&
      boxes[b].innerText === mark &&
      boxes[c].innerText === mark
    ) {
      handleGameOver(mark, pattern);
      return true;
    }
  }
  return false;
};

const isBoardFull = () => boxes.every((box) => box.innerText !== "");

const switchTurn = () => {
  turnO = !turnO;
  updateStatus();
};

const handleTimeout = () => {
  if (!gameActive) return;
  playSound("timeout");
  updateStatus("Time's up! Switching turn...");
  switchTurn();
  startTimer();

  if (singlePlayerMode && !turnO) {
    setTimeout(makeAiMove, 700);
  }
};

const makeAiMove = () => {
  if (!gameActive || !singlePlayerMode || turnO) return;

  const availableMoves = boxes
    .map((box, index) => (box.innerText === "" ? index : -1))
    .filter((index) => index !== -1);

  let moveIndex = null;

  for (const pattern of winPatterns) {
    const values = pattern.map((index) => boxes[index].innerText);
    if (
      values.filter((value) => value === "X").length === 2 &&
      values.filter((value) => value === "").length === 1
    ) {
      moveIndex = pattern.find((index) => boxes[index].innerText === "");
      break;
    }
  }

  if (moveIndex === null) {
    for (const pattern of winPatterns) {
      const values = pattern.map((index) => boxes[index].innerText);
      if (
        values.filter((value) => value === "O").length === 2 &&
        values.filter((value) => value === "").length === 1
      ) {
        moveIndex = pattern.find((index) => boxes[index].innerText === "");
        break;
      }
    }
  }

  if (moveIndex === null && availableMoves.includes(4)) {
    moveIndex = 4;
  }

  if (moveIndex === null) {
    const cornerMoves = [0, 2, 6, 8].filter((index) =>
      availableMoves.includes(index),
    );
    if (cornerMoves.length) {
      moveIndex = cornerMoves[0];
    }
  }

  if (moveIndex === null) {
    moveIndex = availableMoves[0];
  }

  if (moveIndex !== null) {
    applyMove(moveIndex);
  }
};

const applyMove = (index) => {
  if (!gameActive || boxes[index].innerText !== "") return;

  const mark = turnO ? "O" : "X";
  boxes[index].innerText = mark;
  boxes[index].disabled = true;
  playSound("move");

  if (checkWinner(mark)) return;

  if (isBoardFull()) {
    handleGameOver("draw");
    return;
  }

  switchTurn();
  startTimer();

  if (singlePlayerMode && !turnO) {
    setTimeout(makeAiMove, 700);
  }
};

const resetGame = () => {
  turnO = true;
  gameActive = true;
  msgContainer.classList.add("hide");
  enableBoxes();
  updateStatus();
  startTimer();
};

const toggleMode = () => {
  singlePlayerMode = !singlePlayerMode;
  modeBtn.textContent = singlePlayerMode ? "Play vs Friend" : "Play vs AI";
  resetGame();
};

boxes.forEach((box, index) => {
  box.addEventListener("click", () => applyMove(index));
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
modeBtn.addEventListener("click", toggleMode);

updateScoreboard();
updateStatus();
startTimer();
