// Q1: Store username and print
localStorage.setItem("username", "Rahul");
console.log("Q1:", localStorage.getItem("username"));

// Q2: Store theme and display
localStorage.setItem("theme", "dark");
document.getElementById("themeDisplay").innerHTML =
  "Theme: " + localStorage.getItem("theme");

// Q3: Add and remove city
localStorage.setItem("city", "Mumbai");
localStorage.removeItem("city");
console.log("Q3:", localStorage.getItem("city")); // null

// Q4: Clear all localStorage
document.getElementById("clearBtn").onclick = function () {
  localStorage.clear();
  alert("LocalStorage Cleared");
};

// Q5: Store object and retrieve name
let user = { name: "Rahul", age: 22 };
localStorage.setItem("userObj", JSON.stringify(user));

let storedUser = JSON.parse(localStorage.getItem("userObj"));
console.log("Q5 Name:", storedUser.name);

// Q6: Update existing value
localStorage.setItem("theme", "light");
console.log("Q6 Updated Theme:", localStorage.getItem("theme"));

// Q7: Store multiple values
localStorage.setItem("username", "Amit");
localStorage.setItem("theme", "light");

console.log("Q7 Username:", localStorage.getItem("username"));
console.log("Q7 Theme:", localStorage.getItem("theme"));

// Q8: Check persistence after refresh
localStorage.setItem("check", "Still Here");
document.getElementById("persistCheck").innerHTML =
  "Q8: " + localStorage.getItem("check");
