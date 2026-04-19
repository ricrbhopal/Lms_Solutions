// 1. Stop loop when value becomes 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i); // 1,2,3,4
}


// 2. Stop at 6
for (let i = 1; i <= 10; i++) {
  if (i === 6) break;
  console.log(i); // 1–5
}


// 3. Skip number 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1,2,4,5
}


// 4. Skip specific value
for (let i = 1; i <= 5; i++) {
  if (i === 4) continue;
  console.log(i); // 1,2,3,5
}


// 5. break exits immediately
for (let i = 1; i <= 5; i++) {
  console.log(i);
  break; // exits after first iteration
}


// 6. continue skips only current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 2) continue;
  console.log(i); // skips 2 only
}


// 7. Function with return
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));


// 8. Total price (price + tax)
function totalPrice(price, tax) {
  return price + tax;
}
console.log(totalPrice(100, 18));


// 9. Code after return does not run
function test() {
  return "Done";
  console.log("This will not execute");
}
console.log(test());


// 10. break vs continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log("Break:", i); // stops at 2
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log("Continue:", i); // skips 3
}


// 11. Control after break
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
console.log("Loop ended"); // control comes here