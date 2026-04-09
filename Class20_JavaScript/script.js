// Exercise 1,2,5
function runFunction() {
    console.log("Hello Student");

    // Exercise 3 & 25
    const div = document.getElementById("container");
    const btn = document.createElement("button");
    btn.innerHTML = "New Button";
    div.append(btn);
}

// Exercise 6,7
var a = "Amit";
let age = 22;
const city = "Delhi";
console.log(a, age, city);

// Exercise 8
let x;
x = 10;
console.log(x);

// Exercise 9
let userName = "Raj";
let _age = 20;
// let 123name = "Invalid";

// Exercise 10
let num = 10;
let str = "Hello";
let bool = true;

// Exercise 11
console.log(typeof str);

// Exercise 12
let u;
let n = null;
console.log(u, n);

// Exercise 13
let data = 10;
console.log(data);
data = "Hello";
console.log(data);

// Exercise 14
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);

// Exercise 15
console.log(10 % 3);

// Exercise 16
let y = 10;
y += 5;
y -= 2;
console.log(y);

// Exercise 17
console.log(5 == "5");
console.log(5 === "5");

// Exercise 18
console.log(10 > 5);
console.log(5 < 10);

// Exercise 19
let ageCheck = 20;
let hasID = true;
console.log(ageCheck > 18 && hasID);

// Exercise 20
console.log(!true);

// Exercise 21
let inc = 5;
inc++;
console.log(inc);

// Exercise 22
let z = 5;
console.log(z++);
console.log(z);
console.log(++z);

// Exercise 23
let age2 = 18;
let result = age2 >= 18 ? "Adult" : "Minor";
console.log(result);

// Exercise 24
console.log(typeof 10);
console.log(typeof "Hi");

// Exercise 26 & 27
function changeText() {
    document.getElementById("text").innerHTML = "Hello from JavaScript";
}