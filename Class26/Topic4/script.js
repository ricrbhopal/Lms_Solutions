// Q1: typeof (Check data types of string and number)
console.log("Q1:", typeof "Hello"); // string
console.log("Q1:", typeof 100); // number

// Q2: Convert string "50" into a number using Number()
let num1 = Number("50");
console.log("Q2:", num1); // 50 (number)

// Q3: Convert "25px" into integer using parseInt()
let num2 = parseInt("25px");
console.log("Q3:", num2); // 25

// Q4: Convert string to uppercase and remove extra spaces
let str = " hello ";
let resultStr = str.trim().toUpperCase(); // trim removes spaces, toUpperCase converts to capital
console.log("Q4:", resultStr); // HELLO

// Q5: Generate random number and round it down
let randomNum = Math.random(); // generates number between 0 and 1
let floorNum = Math.floor(randomNum); // rounds down (always 0 here)
console.log("Q5 Random:", randomNum);
console.log("Q5 Floor:", floorNum);

// Q6: Add elements using push() and unshift()
let arr1 = [2, 3];
arr1.push(4); // add at end
arr1.unshift(1); // add at beginning
console.log("Q6:", arr1); // [1, 2, 3, 4]

// Q7: Remove elements using pop() and shift()
let arr2 = [1, 2, 3];
arr2.pop(); // removes last element (3)
arr2.shift(); // removes first element (1)
console.log("Q7:", arr2); // [2]

// Q8: Use filter() to get numbers greater than a specific value
let nums1 = [1, 2, 3, 4, 5];
let filteredNums = nums1.filter((n) => n > 3); // returns values > 3
console.log("Q8:", filteredNums); // [4, 5]

// Q9: Use reduce() to find sum of all elements
let nums2 = [1, 2, 3, 4];
let sum = nums2.reduce((acc, curr) => acc + curr, 0); // adds all values
console.log("Q9:", sum); // 10

// Q10: Search elements using includes() and indexOf()
let nums3 = [10, 20, 30];
console.log("Q10 includes:", nums3.includes(20)); // true (value exists)
console.log("Q10 indexOf:", nums3.indexOf(30)); // 2 (position)

// Q11: Object methods - keys and values
let obj = { a: 1, b: 2 };
console.log("Q11 keys:", Object.keys(obj)); // ['a', 'b']
console.log("Q11 values:", Object.values(obj)); // [1, 2]
