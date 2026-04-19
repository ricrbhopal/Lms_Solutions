// 1. Drink selection
let choice = 2;

switch (choice) {
  case 1:
    console.log("Tea");
    break;
  case 2:
    console.log("Coffee");
    break;
  case 3:
    console.log("Juice");
    break;
  default:
    console.log("Invalid");
}


// 2. Day of week (1–7)
let day = 3;

switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid Day");
}


// 3. String values
let flavor = "Chocolate";

switch (flavor) {
  case "Vanilla":
    console.log("Vanilla selected");
    break;
  case "Chocolate":
    console.log("Chocolate selected");
    break;
  case "Strawberry":
    console.log("Strawberry selected");
    break;
  default:
    console.log("Unknown flavor");
}


// 4. Default example
let num = 10;

switch (num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  default:
    console.log("No match → default runs");
}


// 5. break working
let x = 1;

switch (x) {
  case 1:
    console.log("Case 1");
    break; // stops here
  case 2:
    console.log("Case 2");
}


// 6. Without break (fall-through)
let y = 1;

switch (y) {
  case 1:
    console.log("One");
  case 2:
    console.log("Two");
  case 3:
    console.log("Three");
}
// Output: One, Two, Three


// 7. Fall-through example
let grade = "A";

switch (grade) {
  case "A":
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
}


// 8. Menu selection
let menu = "home";

switch (menu) {
  case "home":
    console.log("Home Page");
    break;
  case "about":
    console.log("About Page");
    break;
  case "contact":
    console.log("Contact Page");
    break;
  default:
    console.log("Page not found");
}


// 9. Strict equality (===)
let val = "5";

switch (val) {
  case 5:
    console.log("Number 5");
    break;
  case "5":
    console.log("String 5"); // this runs
    break;
}


// 10. Step-by-step tracing
let z = 2;

switch (z) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two"); // match found
    break;
  default:
    console.log("Default");
}
// Steps:
// check case 1 → no match
// check case 2 → match → execute → break → stop


// 11. When default executes
let k = 100;

switch (k) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  default:
    console.log("Default runs (no match)");
}