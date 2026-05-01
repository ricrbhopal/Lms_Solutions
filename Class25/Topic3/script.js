// Q1: "use strict" with var
(function () {
  "use strict";
  var a = 10;
  console.log("Q1:", a);
})();

// Q2: Using variable without declaration (Strict Mode)
(function () {
  "use strict";
  try {
    b = 20; // Error
  } catch (error) {
    console.log("Q2 Error:", error.message);
  }
})();

// Q3: Strict mode inside function
function testStrict() {
  "use strict";
  try {
    c = 30; // Error
  } catch (error) {
    console.log("Q3 Error:", error.message);
  }
}
testStrict();

// Q4: 'this' in strict mode
function showThis() {
  "use strict";
  console.log("Q4 this:", this); // undefined
}
showThis();

// Q5: Delete variable in strict mode
(function () {
  "use strict";
  var x = 70;
  try {
    delete x; // Error
  } catch (error) {
    console.log("Q5 Error:", error.message);
  }
})();

// Q6: Duplicate parameters in strict mode
try {
  eval(`
    "use strict";
    function dup(a, a) {
      return a;
    }
  `);
} catch (error) {
  console.log("Q6 Error:", error.message);
}

// Q7: Octal number in strict mode
try {
  eval(`
    "use strict";
    var num = 010; // Error
  `);
} catch (error) {
  console.log("Q7 Error:", error.message);
}

// Q8: Reserved keyword as variable name
try {
  eval(`
    "use strict";
    var eval = 50; // Error
  `);
} catch (error) {
  console.log("Q8 Error:", error.message);
}

// Q9: Compare strict vs non-strict

// Non-strict (NO "use strict")
function nonStrict() {
  x = 100; // allowed (creates global variable)
  console.log("Q9 Non-strict:", x);
}
nonStrict();

// Strict
function strictModeTest() {
  "use strict";
  try {
    y = 200; // Error
  } catch (error) {
    console.log("Q9 Strict Error:", error.message);
  }
}
strictModeTest();

// Q10: Combined strict mode demonstration
function combined() {
  "use strict";

  // Undeclared variable
  try {
    z = 300;
  } catch (error) {
    console.log("Q10 Undeclared Error:", error.message);
  }

  // this behavior
  console.log("Q10 this:", this); // undefined

  // Duplicate parameters
  try {
    eval(`function test(a, a){}`);
  } catch (error) {
    console.log("Q10 Duplicate Param Error:", error.message);
  }
}
combined();
