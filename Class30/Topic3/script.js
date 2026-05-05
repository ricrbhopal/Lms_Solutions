// Q1
document.getElementById("input1").addEventListener("keydown", function () {
  console.log("Key Pressed");
});

// Q2
document.getElementById("input2").addEventListener("keyup", function () {
  console.log("Key Released");
});

// Q3
document.getElementById("input3").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    alert("Enter key pressed");
  }
});

// Q4
document.getElementById("input4").addEventListener("keyup", function () {
  console.log(this.value);
});

// Q5
document.getElementById("input5").addEventListener("keyup", function () {
  document.getElementById("para1").innerHTML = this.value;
});

// Q6
document.getElementById("input6").addEventListener("keydown", function (e) {
  console.log("Key:", e.key);
});

// Q7
document.getElementById("input7").addEventListener("keydown", function (e) {
  if (e.key === "a") {
    alert("You pressed 'a'");
  }
});

// Q8
let status = document.getElementById("status");

document.getElementById("input8").addEventListener("keydown", function () {
  status.innerHTML = "Typing...";
});

document.getElementById("input8").addEventListener("keyup", function () {
  status.innerHTML = "Stopped typing";
});

// Q9
document.getElementById("input9").addEventListener("keydown", function (e) {
  console.log("Key:", e.key);
  console.log("Code:", e.code);
});

// Q10
let input10 = document.getElementById("input10");

input10.addEventListener("keydown", function () {
  this.style.border = "2px solid red";
});

input10.addEventListener("keyup", function () {
  this.style.border = "2px solid green";
});
