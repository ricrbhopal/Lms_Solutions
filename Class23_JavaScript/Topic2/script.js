// 1. Stop loop when number reaches 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// 2. Skip printing number 3
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

// 3. Function to add two numbers
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// 4. Stop loop immediately when number 7 is found
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

// 5. Skip all even numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// 6. Return square of a number
function square(num) {
    return num * num;
}
console.log(square(5));

// 7. Stop searching when match found in array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "Mango") {
        console.log("Match Found");
        break;
    }
}

// 8. Skip multiples of 3
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// 9. Return Adult or Minor
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}
console.log(checkAge(20));
console.log(checkAge(15));

// 10. Print 1 to 20 and stop at 12
for (let i = 1; i <= 20; i++) {
    if (i === 12) {
        break;
    }
    console.log(i);
}

// 11. Difference between break and continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // skips 3 only
    }
    console.log("Continue:", i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // stops loop completely
    }
    console.log("Break:", i);
}

// 12. Return larger of two numbers
function larger(a, b) {
    return a > b ? a : b;
}
console.log(larger(25, 40));

// 13. Skip number 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// 14. Break exits infinite loop safely
let x = 1;
while (true) {
    console.log(x);
    if (x === 5) {
        break;
    }
    x++;
}

// 15. Real-life example of return
// ATM balance check function
function checkBalance(balance) {
    return "Available Balance: Rs. " + balance;
}
console.log(checkBalance(5000));