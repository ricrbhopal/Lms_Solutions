// 1. Add two numbers
let a = 10, b = 5;
console.log(a + b);

// 2. Subtract two numbers
console.log(a - b);

// 3. Multiply two numbers
console.log(a * b);

// 4. Divide two numbers
console.log(a / b);

// 5. Find remainder
console.log(a % b);

// 6. Use += operator
let x = 10;
x += 5;
console.log(x);

// 7. Use -= operator
let y = 20;
y -= 8;
console.log(y);

// 8. Use *= operator
let z = 4;
z *= 3;
console.log(z);

// 9. Assign value using =
let num = 20;
console.log(num);

// 10. Update variable value
let score = 50;
score += 10;
console.log(score);

// 11. Compare using ==
console.log(10 == "10");

// 12. Compare using ===
console.log(10 === "10");

// 13. Difference between == and ===
console.log(5 == "5");   
console.log(5 === "5");  

// 14. Greater than >
console.log(15 > 10);

// 15. Less than or equal <=
console.log(8 <= 10);

// 16. Logical AND &&
console.log(true && false);

// 17. Logical OR ||
console.log(true || false);

// 18. Logical NOT !
console.log(!true);

// 19. Combine two conditions
let age = 20;
let hasLicense = true;
console.log(age >= 18 && hasLicense);

// 20. Age above 18 and has ID card
let hasIDCard = true;
console.log(age > 18 && hasIDCard);

// 21. Increment using ++
let count1 = 5;
count1++;
console.log(count1);

// 22. Decrement using --
let count2 = 5;
count2--;
console.log(count2);

// 23. Post-increment
let p = 5;
console.log(p++);
console.log(p);

// 24. Pre-increment
let q = 5;
console.log(++q);

// 25. Difference pre and post increment
let m = 10;
console.log(m++); 
console.log(m);   

let n = 10;
console.log(++n); 

// 26. Ternary adult/minor
let personAge = 17;
console.log(personAge >= 18 ? "Adult" : "Minor");

// 27. Greater of two numbers using ternary
let num1 = 25, num2 = 30;
console.log(num1 > num2 ? num1 : num2);

// 28. typeof string
let str = "Hello";
console.log(typeof str);

// 29. typeof number
let number = 100;
console.log(typeof number);

// 30. Combine arithmetic, comparison, logical
let val1 = 10, val2 = 20;
console.log((val1 + val2 > 25) && (val2 > val1));