// Q1: Promise resolve
function q1() {
  let promise = new Promise(function (resolve) {
    resolve("Task completed");
  });

  promise.then(function (data) {
    console.log(data);
  });
}

// Q2: Promise reject
function q2() {
  let promise = new Promise(function (resolve, reject) {
    reject("Something went wrong");
  });

  promise.catch(function (error) {
    console.log(error);
  });
}

// Q3: setTimeout inside Promise
function q3() {
  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data received");
    }, 2000);
  });

  promise.then(function (data) {
    console.log(data);
  });
}

// Q4: Number validation
function q4() {
  let num = 15;

  let promise = new Promise(function (resolve, reject) {
    if (num > 10) {
      resolve("Valid Number");
    } else {
      reject("Invalid Number");
    }
  });

  promise
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Q5: Promise chaining
function step1() {
  return Promise.resolve("Step 1 Complete");
}

function step2() {
  return Promise.resolve("Step 2 Complete");
}

function step3() {
  return Promise.resolve("Step 3 Complete");
}

function q5() {
  step1()
    .then(function (data) {
      console.log(data);
      return step2();
    })
    .then(function (data) {
      console.log(data);
      return step3();
    })
    .then(function (data) {
      console.log(data);
    });
}

// Q6: Add and multiply
function q6() {
  Promise.resolve(5)
    .then(function (num) {
      return num + 10;
    })
    .then(function (num) {
      return num * 2;
    })
    .then(function (result) {
      console.log(result);
    });
}

// Q7: Online order process
function q7() {
  Promise.resolve("Order Placed")
    .then(function (data) {
      console.log(data);
      return "Shipped";
    })
    .then(function (data) {
      console.log(data);
      return "Delivered";
    })
    .then(function (data) {
      console.log(data);
    });
}

// Q8: Random success/failure
function q8() {
  let promise = new Promise(function (resolve, reject) {
    let success = Math.random() > 0.5;

    if (success) {
      resolve("Success");
    } else {
      reject("Failure");
    }
  });

  promise
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Q9: Nested async tasks using Promises
function q9() {
  Promise.resolve()
    .then(function () {
      console.log("Task 1");
      return Promise.resolve();
    })
    .then(function () {
      console.log("Task 2");
      return Promise.resolve();
    })
    .then(function () {
      console.log("Task 3");
    });
}

// Q10: Resolve after 3 seconds
function q10() {
  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Loading Complete");
    }, 3000);
  });

  promise.then(function (data) {
    console.log(data);
  });
}
