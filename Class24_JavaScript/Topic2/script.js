// 1. Function expression stored in variable and called
let greet = function () {
  console.log("1. Hello World");
};
greet();

// 2. Function expression executed using variable name
let sayHi = function () {
  console.log("2. Hi there!");
};
sayHi();

// 3. Function expression with one parameter
let showValue = function (value) {
  console.log("3. Value:", value);
};
showValue("JavaScript");

// 4. Function expression that stores and prints a message
let message = function () {
  let msg = "4. Welcome to College";
  console.log(msg);
};
message();

// 5. Function expression with two parameters
let display = function (a, b) {
  console.log("5. Value 1:", a, "Value 2:", b);
};
display(10, 20);

// 6. Two function expressions with different variable names
let func1 = function () {
  console.log("6. Function 1");
};

let func2 = function () {
  console.log("6. Function 2");
};

func1();
func2();

// 7. Assign function expression to another variable
let original = function () {
  console.log("7. Original function");
};

let copy = original;

original();
copy();

// 8. Function expression with return value
let add = function (a, b) {
  return a + b;
};

console.log("8. Sum:", add(5, 3));

// 9. Call function expression multiple times
let square = function (num) {
  console.log("9. Square of", num, "=", num * num);
};

square(2);
square(4);
square(6);

// 10. Calling function expression before declaration
try {
  test(); // Error will occur
} catch (error) {
  console.log("10. Error:", error.message);
}

let test = function () {
  console.log("This will not run before declaration");
};
