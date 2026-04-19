// 1. Print 1 to 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 2. Print 5 to 1
let a = 5;
while (a >= 1) {
  console.log(a);
  a--;
}

// 3. Start from 2, add 2 (<11)
let b = 2;
while (b < 11) {
  console.log(b);
  b += 2;
} // 2,4,6,8,10

// 4. Sum from 10 to 5
let c = 10,
  sum = 0;
while (c >= 5) {
  sum += c;
  c--;
}
console.log(sum);

// 5. Structure (init → condition → work → update)
let d = 1;
while (d <= 3) {
  console.log(d);
  d++;
}

// 6. Trace: d=1→print→2→print→3→print→4 stop

// 7. Condition false at start
let e = 5;
while (e < 1) {
  console.log(e);
  e++;
} // never runs

// 8. No update → infinite loop
// let f = 1;
// while (f <= 5) {
//   console.log(f);
// } // no f++

// 9. Infinite loop example
// let g = 1;
// while (g > 0) {
//   console.log(g);
//   g++;
// } // never stops

// 10. Condition controls stopping
let h = 1;
while (h <= 3) {
  console.log(h);
  h++;
} // stops at 4

// 11. Increment vs Decrement
let x = 1;
while (x <= 3) {
  console.log(x);
  x++;
} // 1→3

let y = 3;
while (y >= 1) {
  console.log(y);
  y--;
} // 3→1

// 12. Runs how many times
let z = 1;
while (z <= 5) {
  console.log(z);
  z++;
} // runs 5 times
