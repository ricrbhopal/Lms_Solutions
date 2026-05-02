// Q1: Multiply each number by 2
let nums1 = [1, 2, 3, 4];
let result1 = nums1.map((n) => n * 2);
console.log("Q1:", result1);

// Q2: Add 10 to each element
let nums2 = [5, 10, 15];
let result2 = nums2.map((n) => n + 10);
console.log("Q2:", result2);

// Q3: Convert all names to uppercase
let names1 = ["raj", "amit", "rohit"];
let result3 = names1.map((name) => name.toUpperCase());
console.log("Q3:", result3);

// Q4: Find square of each number
let nums3 = [2, 3, 4];
let result4 = nums3.map((n) => n * n);
console.log("Q4:", result4);

// Q5: Convert numbers to strings
let nums4 = [10, 20, 30];
let result5 = nums4.map((n) => n.toString());
console.log("Q5:", result5);

// Q6: Add "Mr." before each name
let names2 = ["raj", "amit", "rohit"];
let result6 = names2.map((name) => "Mr. " + name);
console.log("Q6:", result6);

// Q7: Get last digit of each number
let nums5 = [123, 456, 789];
let result7 = nums5.map((n) => n % 10);
console.log("Q7:", result7);

// Q8: Check if each number is even (true/false)
let nums6 = [1, 2, 3, 4, 5];
let result8 = nums6.map((n) => n % 2 === 0);
console.log("Q8:", result8);

// Q9: Extract only names from array of objects
let users = [
  { id: 1, name: "Raj" },
  { id: 2, name: "Amit" },
];
let result9 = users.map((user) => user.name);
console.log("Q9:", result9);

// Q10: Apply 10% discount to prices
let prices = [100, 200, 300];
let result10 = prices.map((price) => price - price * 0.1);
console.log("Q10:", result10);
