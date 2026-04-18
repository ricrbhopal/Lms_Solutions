// 1. Store name, age, student status
let name = "Raj";
let age = 23;
let isStudent = true;

console.log(name, age, isStudent);

// 2. var, let, const
var city = "Delhi";
let country = "India";
const pi = 3.14;

console.log(city, country, pi);

// 3. Declaration + initialization
let score;
score = 95;
console.log(score);

// 4. Different data types
let num = 100;
let text = "Hello";
let bool = false;

console.log(num, text, bool);

// 5. undefined and null
let a;
let b = null;

console.log(a, b);

// 6. typeof check
console.log(typeof num);   // number
console.log(typeof text);  // string
console.log(typeof bool);  // boolean
console.log(typeof a);     // undefined
console.log(typeof b);     // object (JS quirk)

// 7. Multiple variables display
let x = 10, y = 20, z = 30;
console.log(x, y, z);

// 8. Simple calculation
let sum = x + y;
console.log("Sum:", sum);

// 9. Object for student
let student = {
  name: "Raj",
  age: 23
};
console.log(student);

// 10. Dynamic typing
let value = 10;
console.log(typeof value); // number

value = "Now I am a string";
console.log(typeof value); // string

// 11. const behavior
const fixed = 50;
// fixed = 100; ❌ ERROR (uncomment to see)
console.log(fixed);