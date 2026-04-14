// 1. Print numbers from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2. Print numbers from 5 to 15
i = 5;
while (i <= 15) {
    console.log(i);
    i++;
}

// 3. Print even numbers from 2 to 20
i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

// 4. Print odd numbers from 1 to 15
i = 1;
while (i <= 15) {
    console.log(i);
    i += 2;
}

// 5. Reverse from 10 to 1
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// 6. Multiples of 5 up to 50
i = 5;
while (i <= 50) {
    console.log(i);
    i += 5;
}

// 7. First 10 natural numbers
i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 8. Sum from 1 to 10
i = 1;
let sum = 0;
while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);

// 9. Sum of even numbers from 1 to 20
i = 2;
let evenSum = 0;
while (i <= 20) {
    evenSum += i;
    i += 2;
}
console.log(evenSum);

// 10. Multiplication table of 3
i = 1;
while (i <= 10) {
    console.log("3 x " + i + " = " + (3 * i));
    i++;
}

// 11. Numbers divisible by 3 between 1 and 30
i = 1;
while (i <= 30) {
    if (i % 3 === 0) {
        console.log(i);
    }
    i++;
}

// 12. Repeat Hello JavaScript 5 times
i = 1;
while (i <= 5) {
    console.log("Hello JavaScript");
    i++;
}

// 13. Decrease from 20 to 5
i = 20;
while (i >= 5) {
    console.log(i);
    i--;
}

// 14. If condition is false at beginning
// Loop body will not run even once
i = 10;
while (i < 5) {
    console.log(i);
    i++;
}

// 15. Infinite loop example
// Warning: Runs forever
/*
let x = 1;
while (x > 0) {
    console.log(x);
}
*/

// 16. Why update variable is necessary
// Without update, loop may never stop

// 17. Why while is called pre-check loop
// Because condition is checked before executing loop body

// 18. Real-life example
// ATM machine keeps asking for PIN until correct PIN entered
let correctPin = false;
while (!correctPin) {
    console.log("Enter PIN again");
    correctPin = true; // Example: correct PIN entered
}