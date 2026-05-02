// Q1: Create a string using double quotes
let str1 = "Hello World";
console.log("Q1:", str1);

// Q2: Create a string using single quotes
let str2 = "JavaScript";
console.log("Q2:", str2);

// Q3: Create a string using backticks (template literal)
let str3 = `Welcome to JS`;
console.log("Q3:", str3);

// Q4: String with double quotes using escape sequence
let str4 = 'He said, "Hello!"';
console.log("Q4:", str4);

// Q5: Join two strings using + operator
let firstName = "Raj";
let lastName = "Gupta";
let fullName = firstName + " " + lastName;
console.log("Q5:", fullName);

// Q6: Find length of a string
let str6 = "Programming";
console.log("Q6 Length:", str6.length);

// Q7: Access first character using indexing
let str7 = "Hello";
console.log("Q7 First Character:", str7[0]);

// Q8: Access last character of a string
let str8 = "JavaScript";
let lastChar = str8[str8.length - 1];
console.log("Q8 Last Character:", lastChar);

// Q9: Template literal with variable
let name = "Raj";
let message = `Hello, ${name}!`;
console.log("Q9:", message);

// Q10: Multi-line string using backticks
let multiLine = `This is line 1
This is line 2
This is line 3`;
console.log("Q10:\n" + multiLine);

// Q11: Print characters at different indexes
let str11 = "Coding";
console.log("Q11 Index 0:", str11[0]);
console.log("Q11 Index 2:", str11[2]);
console.log("Q11 Index 5:", str11[5]);

// Q12: Combined program
let s1 = "Hello";
let s2 = "World";

// Join strings
let combined = s1 + " " + s2;

// Length
let length = combined.length;

// First and last character
let firstChar = combined[0];
let lastCharCombined = combined[combined.length - 1];

console.log("Q12 Combined String:", combined);
console.log("Q12 Length:", length);
console.log("Q12 First Character:", firstChar);
console.log("Q12 Last Character:", lastCharCombined);
