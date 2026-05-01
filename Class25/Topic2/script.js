// Q1: var hoisting (before declaration)

console.log("Q1:", a); // undefined (hoisted)
var a = 10;

// Q2: var before and after initialization

console.log("Q2 before init:", b); // undefined
var b = 20;
console.log("Q2 after init:", b); // 20

// Q3: let before declaration (TDZ)

try {
  console.log("Q3:", c); // ReferenceError
} catch (error) {
  console.log("Q3 Error:", error.message);
}
let c = 30;

// Q4: const before declaration (TDZ)

try {
  console.log("Q4:", d); // ReferenceError
} catch (error) {
  console.log("Q4 Error:", error.message);
}
const d = 40;

// Q5: Function declaration hoisting

greet(); // Works

function greet() {
  console.log("Q5: Hello from function declaration");
}

// Q6: Function expression before assignment
try {
  sayHello(); // TypeError
} catch (error) {
  console.log("Q6 Error:", error.message);
}

var sayHello = function () {
  console.log("Hello from function expression");
};

// Q7: Function expressions behave like variables

console.log("Q7:", typeof myFunc); // undefined

var myFunc = function () {
  console.log("Function expression");
};

console.log("Q7 after init:", typeof myFunc); // function

// Q8: TDZ inside block (let)
{
  try {
    console.log("Q8:", x); // ReferenceError
  } catch (error) {
    console.log("Q8 Error:", error.message);
  }

  let x = 50;
  console.log("Q8 after declaration:", x);
}

// Q9: var vs let hoisting comparison

console.log("Q9 var:", v); // undefined

try {
  console.log("Q9 let:", l); // ReferenceError
} catch (error) {
  console.log("Q9 let Error:", error.message);
}

var v = 100;
let l = 200;

// Q10: Combined hoisting demo
// var
console.log("Q10 var:", p); // undefined

// let / const
try {
  console.log("Q10 let:", q);
} catch (error) {
  console.log("Q10 let Error:", error.message);
}

try {
  console.log("Q10 const:", r);
} catch (error) {
  console.log("Q10 const Error:", error.message);
}

// function declaration
demo(); // Works

// function expression
try {
  demoExp(); // TypeError
} catch (error) {
  console.log("Q10 function expression Error:", error.message);
}

// Declarations
var p = 1;
let q = 2;
const r = 3;

function demo() {
  console.log("Q10: Function declaration works");
}

var demoExp = function () {
  console.log("Q10: Function expression");
};
