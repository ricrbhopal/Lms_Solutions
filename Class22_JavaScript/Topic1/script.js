// 1. Table of 15 (up to 5 steps)
for (let i = 1; i <= 5; i++) {
  console.log("15 x " + i + " = " + (15 * i));
}

// 2. Loop from 2 to 10 (even numbers)
for (let i = 2; i <= 10; i += 2) {
  console.log(i); // Only even numbers (step = 2)
}

// 3. Loop from 5 to 1 (decrement)
for (let i = 5; i >= 1; i--) {
  console.log(i); // Stops when i < 1
}

// 4. Basic loop structure explanation
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
// init → condition → work → increment

// 5. Skip numbers (increase by 2)
for (let i = 1; i <= 10; i += 2) {
  console.log(i); // 1,3,5,7,9
}

// 6. Trace execution (example)
for (let i = 1; i <= 3; i++) {
  console.log(i);
}
// Steps: i=1 → print → i=2 → print → i=3 → print → stop

// 7. Loop stops when condition false
for (let i = 1; i <= 4; i++) {
  console.log(i); // stops at i=5
}

// 8. Infinite loop (condition always true)
// for (let i = 1; i > 0; i++) {
//   console.log(i); // never stops
// }

// 9. Role of counter variable (i)
for (let i = 1; i <= 5; i++) {
  console.log(i); // i controls loop count
}

// 10. Increment vs Decrement
for (let i = 1; i <= 3; i++) console.log(i); // 1→3
for (let i = 3; i >= 1; i--) console.log(i); // 3→1

// 11. Number of iterations
for (let i = 1; i <= 5; i++) {
  console.log(i); // runs 5 times
}

// 12. Complete flow (table example)
for (let i = 1; i <= 5; i++) {
  console.log(15 * i);
}
// start → check → execute → increment → repeat → stop