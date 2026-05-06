const { use } = require("react");

// Q1
function q1() {
  sessionStorage.setItem("username", "Rahul");
  console.log("Q1:", sessionStorage.getItem("username"));
}

// Q2
function q2() {
  sessionStorage.setItem("theme", "dark");
  document.getElementById("themeDisplay").innerHTML =
    "Theme: " + sessionStorage.getItem("theme");
}

// Q3
function q3() {
  sessionStorage.setItem("city", "Mumbai");
  sessionStorage.removeItem("city");
  console.log("Q3:", sessionStorage.getItem("city"));
}

// Q4
function q4() {
  sessionStorage.clear();
  alert("SessionStorage Cleared");
}

// Q5
function q5() {
  let user = { name: "Rahul", age: 22 };
  sessionStorage.setItem("userObj", JSON.stringify(user));

  let data = JSON.parse(sessionStorage.getItem("userObj"));
  console.log("Q5 Name:", data.name);
}

// Q6
function q6() {
  sessionStorage.setItem("check", "Still Here");
  document.getElementById("persistCheck").innerHTML =
    "Q6: " + sessionStorage.getItem("check");
}

// Q7
function q7() {
  alert("Open in new tab → sessionStorage will be empty");
}

// Q8
function q8() {
  sessionStorage.setItem("theme", "light");
  console.log("Q8 Updated Theme:", sessionStorage.getItem("theme"));
}
