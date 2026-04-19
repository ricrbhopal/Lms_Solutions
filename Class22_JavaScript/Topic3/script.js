// 1. Print all elements
let arr = [1, 2, 3, 4];
arr.forEach(function(el) {
  console.log(el);
});


// 2. Arrow function
arr.forEach(el => console.log(el));


// 3. Array of numbers
let numbers = [10, 20, 30];
numbers.forEach(n => console.log(n));


// 4. Array of fruits
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(f => console.log(f));


// 5. Print index and value
fruits.forEach((value, index) => {
  console.log(index, value);
});


// 6. Format "0: Apple"
fruits.forEach((value, index) => {
  console.log(index + ": " + value);
});


// 7. Perform action (add text)
fruits.forEach(f => {
  console.log("Fruit: " + f);
});


// 8. Modify elements manually
let nums = [1, 2, 3];
nums.forEach((n, i, arr) => {
  arr[i] = n * 2;
});
console.log(nums); // [2,4,6]


// 9. Runs for all elements
let test = [5, 6, 7];
test.forEach(n => {
  console.log("Running for:", n);
});


// 10. Cannot stop forEach
test.forEach(n => {
  if (n === 6) return; // only skips this iteration
  console.log(n);
});
// No break → loop still continues


// 11. Parameters (element, index, array)
let demo = [10, 20, 30];
demo.forEach((el, idx, arr) => {
  console.log("Element:", el);
  console.log("Index:", idx);
  console.log("Array:", arr);
});


// 12. Compare forEach vs normal loop

// forEach
demo.forEach(el => console.log(el));

// for loop
for (let i = 0; i < demo.length; i++) {
  console.log(demo[i]);
}