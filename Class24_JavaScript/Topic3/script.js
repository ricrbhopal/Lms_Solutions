// 1. Print “Welcome to JavaScript”
let welcome = () => {
  console.log("Welcome to JavaScript");
};
welcome();

// 2. Take a name and print greeting
let greet = (name) => {
  console.log("Hello " + name);
};
greet("Raj");

// 3. Add two numbers and return result
let add = (a, b) => {
  return a + b;
};
console.log("3. Sum:", add(5, 10));

// 4. Multiply two numbers and print output
let multiply = (a, b) => {
  console.log("4. Product:", a * b);
};
multiply(4, 6);

// 5. Return square of a number
let square = (num) => {
  return num * num;
};
console.log("5. Square:", square(7));

// 6. Sum of three numbers
let sumThree = (a, b, c) => {
  return a + b + c;
};
console.log("6. Sum of 3 numbers:", sumThree(2, 3, 5));

// 7. Return length of string
let stringLength = (str) => {
  return str.length;
};
console.log("7. Length:", stringLength("JavaScript"));

// 8. Convert string to uppercase
let toUpper = (str) => {
  return str.toUpperCase();
};
console.log("8. Uppercase:", toUpper("hello"));

// 9. Check positive or negative number
let checkNumber = (num) => (num >= 0 ? "Positive" : "Negative");

console.log("9.", checkNumber(-5));

// 10. Difference between two numbers
let difference = (a, b) => {
  return a - b;
};
console.log("10. Difference:", difference(10, 4));

// 11. Return message
let message = () => {
  return "Learning Arrow Functions";
};
console.log("11.", message());
