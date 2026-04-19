// 1. Arithmetic operations
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// 2. Modulus
console.log("Remainder:", a % b);

// 3. Exponent
console.log("Power:", a ** b);

// 4. += and -=
let x = 20;
x += 10; // 30
console.log("After +=:", x);

x -= 5; // 25
console.log("After -=:", x);

// 5. *= and /=
let y = 10;
y *= 2; // 20
console.log("After *=:", y);

y /= 4; // 5
console.log("After /=:", y);

// 6. == vs ===
console.log(5 == "5");   // true
console.log(5 === "5");  // false

// 7. Comparison operators
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 5);

// 8. Logical AND
let p = true;
let q = false;
console.log("AND:", p && q);

// 9. NOT operator
console.log("NOT:", !p);

// 10. Pre-increment vs Post-increment
let i = 5;
console.log("Post:", i++); // 5
console.log("After Post:", i); // 6

let j = 5;
console.log("Pre:", ++j); // 6

// 11. Pre-decrement vs Post-decrement
let m = 5;
console.log("Post Dec:", m--); // 5
console.log("After Post Dec:", m); // 4

let n = 5;
console.log("Pre Dec:", --n); // 4

// 12. Ternary operator
let marks = 45;
let result = (marks >= 40) ? "Pass" : "Fail";
console.log("Result:", result);

// 13. Multiple conditions
let attendance = 80;
console.log("Eligible:", (marks > 80 && attendance > 75));

// 14. typeof
console.log(typeof 100);        // number
console.log(typeof "Hello");    // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object (JS quirk)