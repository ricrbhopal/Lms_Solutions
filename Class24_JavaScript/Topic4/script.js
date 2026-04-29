// 1. Anonymous function assigned to variable
let func1 = function () {
  console.log("Anonymous Function");
};

// 2. Print "Hello"
let sayHello = function () {
  console.log("Hello");
};
sayHello();

// 3. Add two numbers
let add = function (a, b) {
  return a + b;
};

// 4. Call and print output
console.log("Sum:", add(5, 3));

// 5 & 6. setTimeout with anonymous function
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

// 7. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed");
})();

// 8. IIFE printing message
(function () {
  console.log("Hello from IIFE");
})();

// 9. Call multiple times
let greet = function () {
  console.log("Hi!");
};
greet();
greet();

// 10. Anonymous function as callback
function process(callback) {
  callback();
}

process(function () {
  console.log("Callback executed");
});

// 11. Anonymous function with parameters and return
let multiply = function (x, y) {
  return x * y;
};
console.log("Multiply:", multiply(4, 5));

// 12. Combined program
// variable
let show = function () {
  console.log("Stored in variable");
};
show();

// callback
function execute(cb) {
  cb();
}
execute(function () {
  console.log("Inside callback");
});

// IIFE
(function () {
  console.log("Executed instantly (IIFE)");
})();
