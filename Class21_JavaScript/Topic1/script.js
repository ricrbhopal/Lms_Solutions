// Check if JS is connected
console.log("JavaScript file connected successfully!");

// Print Hello World
console.log("Hello World");

// Print your name
console.log("Raj Gupta"); // change if needed

// Button click event
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  console.log("Button clicked!");

  output.innerText = "You clicked the button!";

  alert("Button was clicked!");
});