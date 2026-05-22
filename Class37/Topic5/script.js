// Q1: Handle ReferenceError
function q1() {
  try {
    console.log(userName);
  } catch (error) {
    console.log("ReferenceError Handled");
  }
}

// Q2: Print handled error message
function q2() {
  try {
    console.log(data);
  } catch (error) {
    console.log("Handled Error");
  }
}

// Q3: Print error.name and error.message
function q3() {
  try {
    console.log(test);
  } catch (error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
  }
}

// Q4: TypeError using toUpperCase()
function q4() {
  try {
    let num = 100;
    console.log(num.toUpperCase());
  } catch (error) {
    console.log("TypeError Handled");
    console.log(error.message);
  }
}

// Q5: JSON.parse invalid data
function q5() {
  try {
    let data = "{name:'Rahul'}";

    JSON.parse(data);
  } catch (error) {
    console.log("Invalid JSON");
    console.log(error.message);
  }
}

// Q6: Custom Error using throw
function q6() {
  try {
    let age = 16;

    if (age < 18) {
      throw new Error("Age must be above 18");
    }
  } catch (error) {
    console.log(error.message);
  }
}

// Q7: finally block
function q7() {
  try {
    console.log(testVar);
  } catch (error) {
    console.log("Error Occurred");
  } finally {
    console.log("Execution Completed");
  }
}

// Q8: Nested try...catch
function q8() {
  try {
    try {
      console.log(user);
    } catch (error) {
      console.log("Inner Catch");
    }
  } catch (error) {
    console.log("Outer Catch");
  }
}

// Q9: Password validation
function login(password) {
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters");
  }

  return "Login Successful";
}

function q9() {
  try {
    console.log(login("123"));
  } catch (error) {
    console.log(error.message);
  }
}

// Q10: Async function with try...catch
async function fetchData() {
  try {
    let response = await fetch("https://wrongapi.com/data");

    let data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("API Fetch Error");
    console.log(error.message);
  }
}

function q10() {
  fetchData();
}
