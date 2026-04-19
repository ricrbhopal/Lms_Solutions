// 1. FOR LOOP PRACTICE

// Exercise 1: 1 to 10
for (let i = 1; i <= 10; i++) console.log(i);

// Exercise 2: Even numbers (1–20)
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// Exercise 3: Reverse 10 to 1
for (let i = 10; i >= 1; i--) console.log(i);

// Exercise 4: Sum 1 to 5
let sum1 = 0;
for (let i = 1; i <= 5; i++) sum1 += i;
console.log("Sum 1-5:", sum1);

// 2. WHILE LOOP PRACTICE

// Exercise 5: 1 to 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Exercise 6: Reverse 5 to 1
let j = 5;
while (j >= 1) {
  console.log(j);
  j--;
}

// Exercise 7: Sum 1 to 10
let k = 1,
  sum2 = 0;
while (k <= 10) {
  sum2 += k;
  k++;
}
console.log("Sum 1-10:", sum2);

// Exercise 8: Condition false at start
let x = 5;
while (x < 1) {
  console.log(x); // never runs
}

// 3. FOR vs WHILE

// Exercise 9: for loop
for (let a = 1; a <= 5; a++) console.log(a);

// Exercise 10: while loop
let b = 1;
while (b <= 5) {
  console.log(b);
  b++;
}

// 4. INFINITE LOOP

// Exercise 11: infinite loop
// while (true) {
//   console.log("Running forever");
// }

// Exercise 12: fixed loop
let c = 1;
while (c <= 5) {
  console.log(c);
  c++;
}

// 5. forEach()

// Exercise 13
let arr1 = [1, 2, 3, 4];
arr1.forEach((num) => console.log(num));

// Exercise 14
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((f) => console.log(f));

// 6. forEach with index

// Exercise 15
arr1.forEach((num, index) => {
  console.log(index, num);
});

// 7. forEach Processing

// Exercise 16: square
arr1.forEach((num) => console.log(num * num));

// Exercise 17: pass/fail
let marks = [45, 60, 30, 80];
marks.forEach((m) => {
  console.log(m >= 40 ? "Pass" : "Fail");
});

// 8. LOOP CONTROL

// Exercise 18: stop at value
for (let d = 1; d <= 10; d++) {
  if (d === 5) break;
  console.log(d);
}

// Exercise 19: skip values
for (let e = 1; e <= 10; e++) {
  if (e === 5) continue;
  console.log(e);
}

// 9. COMBINED

// Exercise 20
for (let f = 1; f <= 5; f++) console.log(f);

let g = 1,
  sum3 = 0;
while (g <= 5) {
  sum3 += g;
  g++;
}
console.log("Sum:", sum3);

let arr2 = [10, 20, 30];
arr2.forEach((n) => console.log(n));

// 10. CHALLENGE

// Exercise 21: table
let num = 5;
for (let h = 1; h <= 10; h++) {
  console.log(num + " x " + h + " = " + num * h);
}

// Exercise 22: count even (1–50)
let count = 0;
for (let z = 1; z <= 50; z++) {
  if (z % 2 === 0) count++;
}
console.log("Even count:", count);

// Exercise 23: largest number
let arr3 = [10, 25, 5, 40, 15];
let max = arr3[0];

for (let i2 = 1; i2 < arr3.length; i2++) {
  if (arr3[i2] > max) max = arr3[i2];
}
console.log("Largest:", max);
