// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Print numbers from 5 to 15
for (let i = 5; i <= 15; i++) {
    console.log(i);
}

// 3. Print even numbers from 2 to 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 4. Print odd numbers from 1 to 15
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}

// 5. Reverse from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 6. Multiples of 5 up to 50
for (let i = 5; i <= 50; i += 5) {
    console.log(i);
}

// 7. Numbers from 1 to 100 with gap of 10
for (let i = 1; i <= 100; i += 10) {
    console.log(i);
}

// 8. Squares from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i * i);
}

// 9. Cubes from 1 to 4
for (let i = 1; i <= 4; i++) {
    console.log(i * i * i);
}

// 10. First 10 natural numbers
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 11. Sum from 1 to 10
let sum1 = 0;
for (let i = 1; i <= 10; i++) {
    sum1 += i;
}
console.log(sum1);

// 12. Sum of even numbers 1 to 20
let sumEven = 0;
for (let i = 2; i <= 20; i += 2) {
    sumEven += i;
}
console.log(sumEven);

// 13. Sum of odd numbers 1 to 15
let sumOdd = 0;
for (let i = 1; i <= 15; i += 2) {
    sumOdd += i;
}
console.log(sumOdd);

// 14. Table of 2
for (let i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}

// 15. Table of any number
let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// 16. Numbers divisible by 3 between 1 and 30
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// 17. Backward count from 20 to 5
for (let i = 20; i >= 5; i--) {
    console.log(i);
}

// 18. Print letters A to E
let letters = ["A", "B", "C", "D", "E"];
for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}

// 19. Repeat Hello JavaScript 5 times
for (let i = 1; i <= 5; i++) {
    console.log("Hello JavaScript");
}

// 20. Print your name 10 times
for (let i = 1; i <= 10; i++) {
    console.log("Raj Gupta");
}

// 21. Start from 1, increase by 3 until 20
for (let i = 1; i <= 20; i += 3) {
    console.log(i);
}

// 22. Decrease from 50 to 0 by 5
for (let i = 50; i >= 0; i -= 5) {
    console.log(i);
}

// 23. Infinite loop example
// Warning: This runs forever
// for (let i = 1; true; i++) {
//     console.log(i);
// }

// 24. Counter variable name changed
for (let count = 1; count <= 5; count++) {
    console.log(count);
}

// 25. Three parts of for loop example
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Initialization: let i = 1
// Condition: i <= 5
// Update: i++

// 26. Numbers greater than 10 and less than 20
for (let i = 11; i < 20; i++) {
    console.log(i);
}

// 27. First 5 multiples of 7
for (let i = 1; i <= 5; i++) {
    console.log(7 * i);
}

// 28. Skip every alternate number from 1 to 10
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

// 29. Factorial of 5
let fact = 1;
for (let i = 1; i <= 5; i++) {
    fact *= i;
}
console.log(fact);

// 30. Real-life example
// Example: Sending marks of 30 students one by one
for (let student = 1; student <= 30; student++) {
    console.log("Sending marks for student " + student);
}