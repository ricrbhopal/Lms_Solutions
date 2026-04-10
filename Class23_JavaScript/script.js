// -------------------- 1. IF STATEMENT --------------------

// Exercise 1
let number = 5;
if (number > 0) {
  console.log("Positive");
}

// Exercise 2
let age = 20;
if (age >= 18) {
  console.log("You can vote");
}


// -------------------- 2. IF-ELSE --------------------

// Exercise 3
let num = 10;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Exercise 4
let marks = 40;
if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Exercise 5
let a = 10, b = 20;
if (a > b) {
  console.log(a + " is greater");
} else {
  console.log(b + " is greater");
}


// -------------------- 3. MULTIPLE CONDITIONS --------------------

// Exercise 6
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else if (score >= 50) {
  console.log("C");
} else {
  console.log("Fail");
}

// Exercise 7
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login Success");
} else {
  console.log("Login Failed");
}


// -------------------- 4. NESTED IF --------------------

// Exercise 8
let userAge = 20;
let hasID = true;

if (userAge >= 18) {
  if (hasID) {
    console.log("Allowed");
  } else {
    console.log("Not Allowed");
  }
}


// -------------------- 5. BREAK --------------------

// Exercise 9
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// Exercise 10
for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    console.log("Found 7");
    break;
  }
}


// -------------------- 6. CONTINUE --------------------

// Exercise 11
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// Exercise 12
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}


// -------------------- 7. RETURN --------------------

// Exercise 13
function add(x, y) {
  return x + y;
}
console.log(add(5, 3));

// Exercise 14
function checkEvenOdd(n) {
  return (n % 2 === 0) ? "Even" : "Odd";
}
console.log(checkEvenOdd(7));


// -------------------- 8. SWITCH --------------------

// Exercise 15
let day = 1;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  default: console.log("Invalid day");
}

// Exercise 16
let menu = 2;
switch (menu) {
  case 1: console.log("Tea"); break;
  case 2: console.log("Coffee"); break;
  case 3: console.log("Juice"); break;
}


// -------------------- 9. SWITCH DEFAULT --------------------

// Exercise 17
let fruit = "Mango";
switch (fruit) {
  case "Mango": console.log("Mango is available"); break;
  default: console.log("Not available");
}


// -------------------- 10. CALCULATOR --------------------

// Exercise 18
let operator = "+";
let x = 10, y = 5;

switch (operator) {
  case "+": console.log(x + y); break;
  case "-": console.log(x - y); break;
}


// -------------------- 11. BREAK UNDERSTANDING --------------------

// Exercise 19
let test = 1;
switch (test) {
  case 1: console.log("One");
  case 2: console.log("Two");
  case 3: console.log("Three");
}


// -------------------- 12. COMBINED --------------------

// Exercise 20
let totalMarks = 80;
let grade;

if (totalMarks >= 90) grade = "A";
else if (totalMarks >= 75) grade = "B";
else grade = "C";

switch (grade) {
  case "A": console.log("Excellent"); break;
  case "B": console.log("Good"); break;
  case "C": console.log("Average"); break;
}


// -------------------- 13. CHALLENGE --------------------

// Exercise 21 (FizzBuzz)
let n = 15;

if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz");
} else if (n % 3 === 0) {
  console.log("Fizz");
} else if (n % 5 === 0) {
  console.log("Buzz");
}

// Exercise 22 (Login)
let user = "admin";
let pass = "1234";

if (user === "admin") {
  if (pass === "1234") {
    console.log("Login Success");
  } else {
    console.log("Wrong Password");
  }
} else {
  console.log("Wrong Username");
}

// Exercise 23 (Function)
function checkNumber(num) {
  if (num > 0) return "Positive";
  else if (num < 0) return "Negative";
  else return "Zero";
}

console.log(checkNumber(-5));