// Q1
function inlineClick() {
  alert("Q1 Button Clicked");
}

// Q2
document.getElementById("btn2").onclick = function () {
  console.log("Q2 Button Clicked");
};

// Q3
document.getElementById("btn3").addEventListener("click", function () {
  console.log("Q3 Button Clicked");
});

// Q4
document.getElementById("input1").addEventListener("keydown", function () {
  console.log("Q4 Key Down");
});

// Q5
document.getElementById("input2").addEventListener("keyup", function () {
  console.log("Q5 Key Up");
});

// Q6
document.getElementById("form1").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Q6 Form Submitted");
});

// Q7
document.getElementById("input3").addEventListener("change", function () {
  document.getElementById("output1").innerHTML = this.value;
});

// Q8
document.getElementById("input4").addEventListener("input", function () {
  document.getElementById("output2").innerHTML = this.value;
});

// Q9
window.addEventListener("load", function () {
  document.getElementById("loadMsg").innerHTML = "Q9 Page Fully Loaded";
});

// Q10
document.getElementById("btn10").addEventListener("click", function (event) {
  console.log("Q10 Event Type:", event.type);
});
