// Q1: greet() with callback
function greet(callback) {
  console.log("Hello User");
  callback();
}

function welcome() {
  console.log("Welcome!");
}

function q1() {
  greet(welcome);
}

// Q2: sayBye() callback
function sayBye() {
  console.log("Good Bye!");
}

function executeCallback(callback) {
  callback();
}

function q2() {
  executeCallback(sayBye);
}

// Q3: setTimeout after 2 seconds
function q3() {
  setTimeout(function () {
    console.log("Welcome");
  }, 2000);
}

// Q4: Start End Async Task
function q4() {
  console.log("Start");

  setTimeout(function () {
    console.log("Async Task");
  }, 3000);

  console.log("End");
}

// Q5: Nested setTimeout
function q5() {
  setTimeout(function () {
    console.log("Step 1");

    setTimeout(function () {
      console.log("Step 2");
    }, 2000);
  }, 1000);
}

// Q6: Food order steps
function q6() {
  setTimeout(function () {
    console.log("Order Taken");

    setTimeout(function () {
      console.log("Cooking");

      setTimeout(function () {
        console.log("Served");
      }, 2000);
    }, 2000);
  }, 1000);
}

// Q7: Callback Hell
function q7() {
  setTimeout(function () {
    console.log("Step 1");

    setTimeout(function () {
      console.log("Step 2");

      setTimeout(function () {
        console.log("Step 3");

        setTimeout(function () {
          console.log("Step 4");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

// Q8: Name with callback
function showMessage(name, callback) {
  callback(name);
}

function customMessage(name) {
  console.log("Hello " + name);
}

function q8() {
  showMessage("Rahul", customMessage);
}

// Q9: Callback inside event listener
document.getElementById("btn9").addEventListener("click", function () {
  console.log("Button Clicked");
});

// Q10: Async sequence
function q10() {
  setTimeout(function () {
    console.log("Task 1");

    setTimeout(function () {
      console.log("Task 2");

      setTimeout(function () {
        console.log("Task 3");
      }, 1000);
    }, 1000);
  }, 1000);
}
