// Q1: indexOf() to find index
let arr1 = [10, 20, 30, 40];
console.log("Q1 Index of 30:", arr1.indexOf(30));

// Q2: includes() to check value
let arr2 = [1, 2, 3, 4];
console.log("Q2 Includes 3:", arr2.includes(3));

// Q3: indexOf() for non-existing value
let arr3 = [5, 6, 7];
console.log("Q3 Index of 10:", arr3.indexOf(10)); // -1

// Q4: includes() present & absent
let arr4 = [100, 200, 300];
console.log("Q4 Includes 200:", arr4.includes(200));
console.log("Q4 Includes 500:", arr4.includes(500));

// Q5: find() in array of objects
let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Ravi" },
];

let user = users.find((u) => u.id === 1);
console.log("Q5 Found User:", user);

// Q6: find() with condition
let nums1 = [10, 25, 30, 45];
let result = nums1.find((n) => n > 20);
console.log("Q6 First > 20:", result);

// Q7: filter() greater than number
let nums2 = [5, 15, 25, 35];
let filtered1 = nums2.filter((n) => n > 20);
console.log("Q7 Filter >20:", filtered1);

// Q8: filter() multiple matches

let nums3 = [2, 4, 6, 8, 10];
let evenNums = nums3.filter((n) => n % 2 === 0);
console.log("Q8 Even Numbers:", evenNums);

// Q9: Default sort()
let arr9 = [40, 10, 100, 5];
arr9.sort(); // string sort
console.log("Q9 Default Sort:", arr9);

// Q10: Ascending sort
let arr10 = [40, 10, 100, 5];
arr10.sort((a, b) => a - b);
console.log("Q10 Ascending:", arr10);

// Q11: Descending sort
let arr11 = [40, 10, 100, 5];
arr11.sort((a, b) => b - a);
console.log("Q11 Descending:", arr11);

// Q12: Combined program
let arr12 = [5, 15, 25, 35, 45];

// includes
console.log("Includes 25:", arr12.includes(25));

// indexOf
console.log("Index of 35:", arr12.indexOf(35));

// filter (>20)
let filtered = arr12.filter((n) => n > 20);
console.log("Filtered (>20):", filtered);

// sort ascending
filtered.sort((a, b) => a - b);
console.log("Final Sorted Array:", filtered);
