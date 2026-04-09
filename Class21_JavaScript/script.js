function runExercises() {
  let output = "";

  // 1. For Loop Practice

  // Exercise 1
  output += "Exercise 1:\n";
  for (let i = 1; i <= 10; i++) {
    output += i + " ";
  }

  // Exercise 2
  output += "\n\nExercise 2:\n";
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) output += i + " ";
  }

  // Exercise 3
  output += "\n\nExercise 3:\n";
  for (let i = 10; i >= 1; i--) {
    output += i + " ";
  }

  // Exercise 4
  output += "\n\nExercise 4:\n";
  let sum1 = 0;
  for (let i = 1; i <= 5; i++) {
    sum1 += i;
  }
  output += "Sum = " + sum1;

  // 2. While Loop Practice

  // Exercise 5
  output += "\n\nExercise 5:\n";
  let i = 1;
  while (i <= 5) {
    output += i + " ";
    i++;
  }

  // Exercise 6
  output += "\n\nExercise 6:\n";
  i = 5;
  while (i >= 1) {
    output += i + " ";
    i--;
  }

  // Exercise 7
  output += "\n\nExercise 7:\n";
  i = 1;
  let sum2 = 0;
  while (i <= 10) {
    sum2 += i;
    i++;
  }
  output += "Sum = " + sum2;

  // Exercise 8
  output += "\n\nExercise 8:\n";
  i = 10;
  while (i < 5) {
    output += i;
  }
  output += "Loop did not run";

  // 3. For vs While

  // Exercise 9
  output += "\n\nExercise 9:\n";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }

  // Exercise 10
  output += "\n\nExercise 10:\n";
  i = 1;
  while (i <= 5) {
    output += i + " ";
    i++;
  }

  // 4. Infinite Loop Understanding (safe version)

  // Exercise 11
  output += "\n\nExercise 11 (limited demo):\n";
  let count = 0;
  while (true) {
    output += "Loop ";
    count++;
    if (count === 5) break;
  }

  // Exercise 12
  output += "\n\nExercise 12:\n";
  let x = 1;
  while (x <= 5) {
    output += x + " ";
    x++;
  }

  // 5. forEach Basic

  // Exercise 13
  output += "\n\nExercise 13:\n";
  let numbers = [1, 2, 3, 4];
  numbers.forEach(num => output += num + " ");

  // Exercise 14
  output += "\n\nExercise 14:\n";
  let fruits = ["Apple", "Banana", "Mango"];
  fruits.forEach(f => output += f + " ");

  // 6. forEach with Index

  // Exercise 15
  output += "\n\nExercise 15:\n";
  fruits.forEach((f, index) => {
    output += index + ":" + f + " ";
  });

  // 7. forEach Processing

  // Exercise 16
  output += "\n\nExercise 16:\n";
  numbers.forEach(n => output += (n * n) + " ");

  // Exercise 17
  output += "\n\nExercise 17:\n";
  let marks = [20, 40, 60];
  marks.forEach(m => {
    output += (m >= 33 ? "Pass " : "Fail ");
  });

  // 8. Loop Control

  // Exercise 18
  output += "\n\nExercise 18:\n";
  for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    output += i + " ";
  }

  // Exercise 19
  output += "\n\nExercise 19:\n";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    output += i + " ";
  }

  // 9. Combined

  // Exercise 20
  output += "\n\nExercise 20:\n";

  // for loop
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }

  // while loop sum
  let y = 1, sum3 = 0;
  while (y <= 5) {
    sum3 += y;
    y++;
  }
  output += " Sum=" + sum3;

  // forEach
  numbers.forEach(n => output += " " + n);

  // 10. Challenge

  // Exercise 21
  output += "\n\nExercise 21:\n";
  let num = 5;
  for (let i = 1; i <= 10; i++) {
    output += num + "x" + i + "=" + (num * i) + " ";
  }

  // Exercise 22
  output += "\n\nExercise 22:\n";
  let countEven = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) countEven++;
  }
  output += "Even Count = " + countEven;

  // Exercise 23
  output += "\n\nExercise 23:\n";
  let arr = [10, 25, 5, 40];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  output += "Largest = " + max;

  document.getElementById("output").textContent = output;
}