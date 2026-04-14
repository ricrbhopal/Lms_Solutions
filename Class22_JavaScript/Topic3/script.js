// 1. Array of numbers and print each element
let numbers = [10, 20, 30, 40, 50];
numbers.forEach(function(num) {
    console.log(num);
});

// 2. Array of fruits
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// 3. Print colors using arrow function
let colors = ["Red", "Blue", "Green", "Yellow"];
colors.forEach(color => console.log(color));

// 4. Five student names
let students = ["Raj", "Rahul", "Amit", "Priya", "Neha"];
students.forEach(name => console.log(name));

// 5. Print numbers with indexes
let nums = [5, 10, 15, 20];
nums.forEach((value, index) => {
    console.log("Index:", index, "Value:", value);
});

// 6. Marks multiplied by 2
let marks = [40, 50, 60, 70];
marks.forEach(mark => {
    console.log(mark * 2);
});

// 7. Cities in uppercase
let cities = ["Mumbai", "Delhi", "Pune", "Chennai"];
cities.forEach(city => {
    console.log(city.toUpperCase());
});

// 8. Prices with Rs.
let prices = [100, 250, 500, 750];
prices.forEach(price => {
    console.log("Rs. " + price);
});

// 9. Count total elements
let items = ["Pen", "Book", "Bag", "Pencil"];
let count = 0;
items.forEach(() => {
    count++;
});
console.log("Total Elements:", count);

// 10. Even numbers and their squares
let evenNumbers = [2, 4, 6, 8, 10];
evenNumbers.forEach(num => {
    console.log(num * num);
});

// 11. Three parameters of forEach()
// element = current value
// index = current position
// array = original full array

let demo = ["A", "B", "C"];
demo.forEach((element, index, array) => {
    console.log(element, index, array);
});

// 12. Why break cannot be used
// break works in loops like for, while
// forEach is a method, not loop statement

// 13. Using forEach on non-array value
// Error example:
// let x = 100;
// x.forEach(item => console.log(item));
// Output: TypeError

// 14. Difference between forEach and for loop
// forEach is simpler and cleaner for arrays
// for loop gives more control (break, continue)

// 15. Can forEach return new array?
// No, forEach does not return new array
// It only executes function for each element

// 16. Example with index and element
let animals = ["Dog", "Cat", "Lion"];
animals.forEach((animal, index) => {
    console.log(index + ": " + animal);
});

// 17. Real-life example
// Sending message to every user in contact list
let users = ["User1", "User2", "User3"];
users.forEach(user => {
    console.log("Sending message to " + user);
});

// 18. Why forEach is cleaner
// Less code, easy syntax, readable format

// 19. Extra example
let subjects = ["Math", "Science", "English"];
subjects.forEach(subject => {
    console.log("Subject: " + subject);
});