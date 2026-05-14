// Q1: Async function returning value
async function hello() {
  return "Hello Students";
}

async function q1() {
  let result = await hello();
  console.log(result);
}

// Q2: Promise resolve after 2 seconds
function getData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data received");
    }, 2000);
  });
}

async function q2() {
  let result = await getData();
  console.log(result);
}

// Q3: Sequential async functions
function step1() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Step 1 Complete");
    }, 1000);
  });
}

function step2() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Step 2 Complete");
    }, 1000);
  });
}

async function q3() {
  let result1 = await step1();
  console.log(result1);

  let result2 = await step2();
  console.log(result2);
}

// Q4: Wait for Promise then print
function task() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
}

async function q4() {
  await task();
  console.log("Task Completed");
}

// Q5: try...catch with async/await
function errorPromise() {
  return new Promise(function (resolve, reject) {
    reject("Something went wrong");
  });
}

async function q5() {
  try {
    let result = await errorPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// Q6: checkValue function
function checkValue(value) {
  return new Promise(function (resolve, reject) {
    if (value > 10) {
      resolve("Valid Value");
    } else {
      reject("Invalid Value");
    }
  });
}

async function q6() {
  try {
    let result = await checkValue(15);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// Q7: Online order flow
function orderPlaced() {
  return Promise.resolve("Order Placed");
}

function shipped() {
  return Promise.resolve("Shipped");
}

function delivered() {
  return Promise.resolve("Delivered");
}

async function q7() {
  let step1 = await orderPlaced();
  console.log(step1);

  let step2 = await shipped();
  console.log(step2);

  let step3 = await delivered();
  console.log(step3);
}

// Q8: Multiple await statements
function process1() {
  return Promise.resolve("Process 1");
}

function process2() {
  return Promise.resolve("Process 2");
}

function process3() {
  return Promise.resolve("Process 3");
}

async function q8() {
  let p1 = await process1();
  console.log(p1);

  let p2 = await process2();
  console.log(p2);

  let p3 = await process3();
  console.log(p3);
}
