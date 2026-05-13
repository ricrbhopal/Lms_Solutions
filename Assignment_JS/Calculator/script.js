function Calculate(data) {
  const text = document.getElementById("text");

  if (data === "AC") {
    text.innerText = "0";
    return;
  }

  if (data === "=") {
    try {
      const result = Function("return " + text.innerText)();

      text.innerText = result;
    } catch (error) {
      text.innerText = "Error";
    }

    return;
  }

  if (data === "C") {
    text.innerText = text.innerText.slice(0, -1);

    if (text.innerText === "") {
      text.innerText = "0";
    }

    return;
  }

  // Replace 0 with first value
  if (text.innerText === "0") {
    text.innerText = data;
  } else {
    text.innerText += data;
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key)) {
    Calculate(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    Calculate(key);
  } else if (key === ".") {
    Calculate(".");
  } else if (key === "Enter") {
    event.preventDefault();

    Calculate("=");
  } else if (key === "Backspace") {
    Calculate("C");
  } else if (key === "Escape") {
    Calculate("AC");
  }
});
