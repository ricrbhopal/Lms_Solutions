// 1. Eligible to vote
let age1 = 20;
if (age1 >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// 2. Even or odd
let num1 = 7;
if (num1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 3. Positive or negative
let num2 = -5;
if (num2 >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}

// 4. Pass or fail
let marks1 = 35;
if (marks1 >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 5. Greater number
let a = 10, b = 25;
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

// 6. Driving license eligibility
let age2 = 17;
if (age2 >= 18) {
    console.log("Eligible for driving license");
} else {
    console.log("Not eligible");
}

// 7. Divisible by 5
let num3 = 25;
if (num3 % 5 === 0) {
    console.log("Divisible by 5");
} else {
    console.log("Not divisible by 5");
}

// 8. Password check
let password = "12345";
if (password === "12345") {
    console.log("Correct Password");
} else {
    console.log("Wrong Password");
}

// 9. Temperature check
let temp = 35;
if (temp > 30) {
    console.log("Hot Day");
} else {
    console.log("Cool Day");
}

// 10. Zero or non-zero
let num4 = 0;
if (num4 === 0) {
    console.log("Zero");
} else {
    console.log("Non-zero");
}

// 11. Purchase discount
let amount = 1200;
if (amount > 1000) {
    console.log("Discount Applied");
} else {
    console.log("No Discount");
}

// 12. Username verification
let username = "admin";
if (username === "admin") {
    console.log("Welcome Admin");
} else {
    console.log("Invalid Username");
}

// 13. Leap year
let year = 2024;
if (year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}

// 14. Compare with 100
let num5 = 150;
if (num5 > 100) {
    console.log("Big Number");
} else {
    console.log("Small Number");
}

// 15. Marks above 90
let marks2 = 95;
if (marks2 > 90) {
    console.log("Excellent");
} else {
    console.log("Good");
}

// 16. Divisible by both 2 and 3
let num6 = 12;
if (num6 % 2 === 0 && num6 % 3 === 0) {
    console.log("Divisible by both 2 and 3");
} else {
    console.log("Not divisible by both");
}

// 17. Vowel or consonant
let ch = "a";
if ("aeiouAEIOU".includes(ch)) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// 18. Child or adult
let age3 = 15;
if (age3 < 18) {
    console.log("Child");
} else {
    console.log("Adult");
}

// 19. Largest among three numbers
let x = 10, y = 50, z = 30;
if (x > y && x > z) {
    console.log(x);
} else if (y > z) {
    console.log(y);
} else {
    console.log(z);
}

// 20. Login status
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Login Successful");
} else {
    console.log("Login Failed");
}

// 21. Traffic light
let light = "green";
if (light === "green") {
    console.log("Go");
} else {
    console.log("Stop");
}

// 22. Senior citizen
let age4 = 65;
if (age4 >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Not Senior Citizen");
}

// 23. Exam attendance
let attendance = 80;
if (attendance > 75) {
    console.log("Allowed for Exam");
} else {
    console.log("Denied for Exam");
}

// 24. Product stock check
let inStock = true;
if (inStock) {
    console.log("In Stock");
} else {
    console.log("Out of Stock");
}

// 25. Real-life example
// ATM cash withdrawal
let balance = 5000;
let withdraw = 3000;
if (withdraw <= balance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}