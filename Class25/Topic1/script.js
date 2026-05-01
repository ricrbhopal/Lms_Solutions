// ===============================
// Q1: Global variable and print
// ===============================
var fruits = "Apple, Mango";
console.log("Q1:", fruits);

// ==============================================
// Q2: Global variable accessed inside a function
// ==============================================
var laptops = "Macbook, Dell, Asus";
function laptopsName() {
  console.log("Q2:", laptops);
}
laptopsName();

// ======================================================
// Q3 & Q4: Local variable using var (function scope)
// ======================================================
function phones() {
  var phonesName = "iPhone, Samsung, OnePlus";
  console.log("Q3:", phonesName);
}
phones();

// Trying to access outside (Error)
// console.log(phonesName); // ❌ ReferenceError

// ======================================================
// Q5 & Q6: let inside block (block scope)
// ======================================================
function testLet() {
  if (true) {
    let x = 7;
    console.log("Q5:", x);
  }

  // console.log(x); // ❌ ReferenceError
}
testLet();

// ======================================================
// Q7 & Q8: const inside block (block scope)
// ======================================================
function testConst() {
  if (true) {
    const studentAge = 23;
    console.log("Q7:", studentAge);
  }

  // console.log(studentAge); // ❌ ReferenceError
}
testConst();

// ======================================================
// Q9: Global + Local + Block variables
// ======================================================
var course = "B-Tech"; // global

function branch() {
  let branchName = "CSE"; // local
  console.log("Q9 Local:", branchName);

  if (true) {
    let specialization = "AI/ML"; // block
    console.log("Q9 Block:", specialization);
  }

  // console.log(specialization); // ❌ Error
}

console.log("Q9 Global:", course);
branch();

// console.log(branchName); // ❌ Error

// ======================================================
// Q10: var vs let vs const scope demonstration
// ======================================================
function testScope() {
  if (true) {
    var x = 10; // function scoped
    let y = 20; // block scoped
    const z = 30; // block scoped

    console.log("Inside block:");
    console.log("var x:", x);
    console.log("let y:", y);
    console.log("const z:", z);
  }

  console.log("Outside block:");
  console.log("var x:", x); // ✔️ Works

  // console.log(y); // ❌ Error
  // console.log(z); // ❌ Error
}

testScope();

// ===============================
// Extra Example (Global Scope)
// ===============================
var collegeName = "XYZ College";

function classRoom() {
  console.log("Extra:", collegeName);
}

console.log("Extra:", collegeName);
classRoom();
