// Helper function (safe + reusable)
function addEvent(id, event, callback) {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener(event, callback);
  }
}

// Q1 – Change event
addEvent("input1", "change", function () {
  console.log("Value changed");
});

// Q2 – Print value when clicking outside
addEvent("input2", "change", function () {
  console.log(this.value);
});

// Q3 – Form submit with alert
addEvent("form1", "submit", function (e) {
  e.preventDefault();
  alert("Form Submitted!");
});

// Q4 – Stop page reload
addEvent("form2", "submit", function (e) {
  e.preventDefault();
  console.log("Reload prevented");
});

// Q5 – Focus color change + reset on blur
addEvent("input3", "focus", function () {
  this.style.backgroundColor = "yellow";
});

addEvent("input3", "blur", function () {
  this.style.backgroundColor = "";
});

// Q6 – Focus message
addEvent("input4", "focus", function () {
  console.log("Input Selected");
});

// Q7 – Form alert
addEvent("form3", "submit", function (e) {
  e.preventDefault();
  alert("Form Submitted!");
});

// Q8 – Focus + Change
addEvent("input5", "focus", function () {
  this.style.backgroundColor = "lightblue";
});

addEvent("input5", "blur", function () {
  this.style.backgroundColor = "";
});

addEvent("input5", "change", function () {
  console.log(this.value);
});

// Q9 – Show input value on submit
addEvent("form4", "submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("nameInput").value;
  alert("Name: " + name);
});

// Q10 – Final value after change
// Track typing
addEvent("input6", "input", function () {
  console.log("Typing:", this.value);
});

// Final value after clicking outside
addEvent("input6", "change", function () {
  console.log("Final Value:", this.value);
});
