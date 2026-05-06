// Q1: Hoisting with var
function q1() {
  console.log("Before:", a); // undefined (hoisted)
  var a = 10;
  console.log("After:", a);
}

// Q2: Global + Local variable
function q2() {
  var a = 10;
  function test() {
    var b = 20;
    console.log("Q2:", a + b);
  }
  test();
}

// Q3: Nested function calls
function q3() {
  function functionA() {
    console.log("Inside functionA");
    functionB();
  }

  function functionB() {
    console.log("Inside functionB");
  }

  functionA();
}

// Q4: Same variable name (scope)
function q4() {
  var x = 50;

  function test() {
    var x = 100;
    console.log("Inside function:", x);
  }

  console.log("Global:", x);
  test();
}

// Q5: this (strict vs non-strict)
function q5() {
  function nonStrict() {
    console.log("Non-strict this:", this);
  }

  function strictMode() {
    "use strict";
    console.log("Strict this:", this);
  }

  nonStrict();
  strictMode();
}

// Q6: this inside object
function q6() {
  let obj = {
    name: "Rahul",
    age: 22,
    show: function () {
      console.log("Q6:", this.name, this.age);
    },
  };

  obj.show();
}

// Q7: var vs let vs const hoisting
function q7() {
  try {
    console.log(a); // undefined
    var a = 10;
  } catch (e) {
    console.log(e.message);
  }

  try {
    console.log(b); // error
    let b = 20;
  } catch (e) {
    console.log("let error:", e.message);
  }

  try {
    console.log(c); // error
    const c = 30;
  } catch (e) {
    console.log("const error:", e.message);
  }
}

// Q8: Call stack flow
function q8() {
  function functionA() {
    console.log("functionA start");
    functionB();
    console.log("functionA end");
  }

  function functionB() {
    console.log("functionB");
  }

  console.log("Global start");
  functionA();
  console.log("Global end");
}
