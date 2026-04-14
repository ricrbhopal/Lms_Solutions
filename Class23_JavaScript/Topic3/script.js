// 1. Day name for numbers 1 to 7
let day = 3;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid Day Number");
}

// 2. Month names for 1 to 12
let month = 5;
switch (month) {
    case 1: console.log("January"); break;
    case 2: console.log("February"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("June"); break;
    case 7: console.log("July"); break;
    case 8: console.log("August"); break;
    case 9: console.log("September"); break;
    case 10: console.log("October"); break;
    case 11: console.log("November"); break;
    case 12: console.log("December"); break;
    default: console.log("Invalid Month Number");
}

// 3. Calculator using switch-case
let a = 10, b = 5;
let op = "+";
switch (op) {
    case "+": console.log(a + b); break;
    case "-": console.log(a - b); break;
    case "*": console.log(a * b); break;
    case "/": console.log(a / b); break;
    default: console.log("Invalid Operator");
}

// 4. Traffic light actions
let light = "Red";
switch (light) {
    case "Red": console.log("Stop"); break;
    case "Yellow": console.log("Wait"); break;
    case "Green": console.log("Go"); break;
    default: console.log("Invalid Light");
}

// 5. Fruit name based on input
let fruit = "apple";
switch (fruit) {
    case "apple": console.log("Apple Fruit"); break;
    case "banana": console.log("Banana Fruit"); break;
    case "mango": console.log("Mango Fruit"); break;
    default: console.log("Unknown Fruit");
}

// 6. Grade messages
let grade = "A";
switch (grade) {
    case "A": console.log("Excellent"); break;
    case "B": console.log("Very Good"); break;
    case "C": console.log("Good"); break;
    case "D": console.log("Average"); break;
    case "F": console.log("Fail"); break;
    default: console.log("Invalid Grade");
}

// 7. Check vowel characters
let ch = "e";
switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Not a Vowel");
}

// 8. Restaurant menu options
let menu = 2;
switch (menu) {
    case 1: console.log("Pizza"); break;
    case 2: console.log("Burger"); break;
    case 3: console.log("Pasta"); break;
    default: console.log("Invalid Menu Choice");
}

// 9. Weekend or weekday
let dayNum = 6;
switch (dayNum) {
    case 6:
    case 7:
        console.log("Weekend");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    default:
        console.log("Invalid Day");
}

// 10. Numbers 1–5 into words
let num = 4;
switch (num) {
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    case 4: console.log("Four"); break;
    case 5: console.log("Five"); break;
    default: console.log("Invalid Number");
}

// 11. Without break example
let value = 1;
switch (value) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
        break;
}
// Output: One Two Three

// 12. Default case example
let color = "Blue";
switch (color) {
    case "Red": console.log("Red Color"); break;
    case "Green": console.log("Green Color"); break;
    default: console.log("Invalid Color");
}

// 13. Seasons based on month number
let seasonMonth = 12;
switch (seasonMonth) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Rainy");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid Month");
}

// 14. Difference between if-else and switch-case

// if-else example
let marks = 85;
if (marks >= 90) {
    console.log("Excellent");
} else {
    console.log("Good");
}

// switch-case example
let signal = "Green";
switch (signal) {
    case "Green":
        console.log("Go");
        break;
    default:
        console.log("Stop");
}

// 15. Real-life example where switch-case is better
// ATM menu system
let option = 3;
switch (option) {
    case 1: console.log("Check Balance"); break;
    case 2: console.log("Withdraw Money"); break;
    case 3: console.log("Deposit Money"); break;
    case 4: console.log("Mini Statement"); break;
    default: console.log("Invalid Option");
}