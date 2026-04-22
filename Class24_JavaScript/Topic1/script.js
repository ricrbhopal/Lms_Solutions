// 1. Hello World
function helloWorld() {
    console.log("Hello World");
}
helloWorld();

// 2. Display Name
function myName() {
    console.log("Raj Gupta");
}
myName();

// 3. Welcome Message
function welcome() {
    console.log("Welcome to College");
}
welcome();

// 4. Greeting with parameter
function greet(name) {
    console.log("Hello " + name);
}
greet("Raj");

// 5. Sum of two numbers
function sum(a, b) {
    console.log("Sum:", a + b);
}
sum(10, 5);

// 6. Square of number
function square(num) {
    console.log("Square:", num * num);
}
square(4);

// 7. Return addition
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(3, 7));

// 8. Return multiplication
function multiply(a, b) {
    return a * b;
}
console.log("Multiplication:", multiply(4, 6));

// 9. Name and age
function info(name, age) {
    console.log("My name is " + name + " and I am " + age + " years old.");
}
info("Raj", 23);

// 10. Average of three numbers
function average(a, b, c) {
    return (a + b + c) / 3;
}
console.log("Average:", average(10, 20, 30));

// 11. Call multiple times
function greetUser(name) {
    console.log("Hello " + name);
}
greetUser("Raj");
greetUser("Aman");
greetUser("Priya");

// 12. Greater number
function greater(a, b) {
    return (a > b) ? a : b;
}
console.log("Greater Number:", greater(10, 20));