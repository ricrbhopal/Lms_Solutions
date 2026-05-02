// Q1: Sum of all elements
let nums1 = [1, 2, 3, 4];
let sum = nums1.reduce((acc, curr) => acc + curr, 0);
console.log("Q1 Sum:", sum);

// Q2: Product of all elements
let nums2 = [2, 3, 4];
let product = nums2.reduce((acc, curr) => acc * curr, 1);
console.log("Q2 Product:", product);

// Q3: Find maximum value
let nums3 = [10, 5, 20, 8];
let max = nums3.reduce((acc, curr) => (curr > acc ? curr : acc), nums3[0]);
console.log("Q3 Max:", max);

// Q4: Find minimum value
let nums4 = [10, 5, 20, 8];
let min = nums4.reduce((acc, curr) => (curr < acc ? curr : acc), nums4[0]);
console.log("Q4 Min:", min);

// Q5: Count even numbers
let nums5 = [1, 2, 3, 4, 6];
let evenCount = nums5.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc + 1 : acc),
  0,
);
console.log("Q5 Even Count:", evenCount);

// Q6: Join strings into one sentence
let words = ["Hello", "world", "from", "JS"];
let sentence = words.reduce((acc, curr) => acc + " " + curr);
console.log("Q6 Sentence:", sentence);

// Q7: Total marks from objects
let students = [
  { name: "Raj", marks: 80 },
  { name: "Amit", marks: 70 },
  { name: "Rohit", marks: 90 },
];

let totalMarks = students.reduce((acc, curr) => acc + curr.marks, 0);
console.log("Q7 Total Marks:", totalMarks);

// Q8: Convert array to object
let nums8 = [1, 2, 3];
let obj = nums8.reduce((acc, curr) => {
  acc[curr] = curr;
  return acc;
}, {});
console.log("Q8 Object:", obj);
