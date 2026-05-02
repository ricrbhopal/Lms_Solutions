// Q1: Get only even numbers
let nums1 = [1, 2, 3, 4, 5, 6];
let result1 = nums1.filter((n) => n % 2 === 0);
console.log("Q1:", result1);

// Q2: Get numbers greater than 10
let nums2 = [5, 10, 15, 20];
let result2 = nums2.filter((n) => n > 10);
console.log("Q2:", result2);

// Q3: Get numbers less than 50
let nums3 = [20, 40, 60, 80];
let result3 = nums3.filter((n) => n < 50);
console.log("Q3:", result3);

// Q4: Remove negative numbers
let nums4 = [-5, 10, -2, 20, 30];
let result4 = nums4.filter((n) => n >= 0);
console.log("Q4:", result4);

// Q5: Get only odd numbers
let nums5 = [1, 2, 3, 4, 5];
let result5 = nums5.filter((n) => n % 2 !== 0);
console.log("Q5:", result5);

// Q6: Names with length greater than 4
let names = ["Raj", "Amit", "Suresh", "Rohit"];
let result6 = names.filter((name) => name.length > 4);
console.log("Q6:", result6);

// Q7: Numbers divisible by 5
let nums7 = [10, 12, 15, 18, 20];
let result7 = nums7.filter((n) => n % 5 === 0);
console.log("Q7:", result7);

// Q8: Remove duplicate values (basic logic)
let nums8 = [1, 2, 2, 3, 4, 4, 5];
let result8 = nums8.filter((value, index, arr) => arr.indexOf(value) === index);
console.log("Q8:", result8);

// Q9: Users with id greater than 1
let users = [
  { id: 1, name: "Raj" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Rohit" },
];
let result9 = users.filter((user) => user.id > 1);
console.log("Q9:", result9);

// Q10: Passed students (marks ≥ 40)
let marks = [35, 50, 80, 20, 40];
let result10 = marks.filter((m) => m >= 40);
console.log("Q10:", result10);
