// Q1: Store and print username in localStorage
localStorage.setItem("username", "Amit");
console.log("Q1:", localStorage.getItem("username"));

// Q2: Store theme in sessionStorage and display
sessionStorage.setItem("theme", "dark");
document.getElementById("themeDisplay").innerHTML =
  "Theme: " + sessionStorage.getItem("theme");

// Q3: Create cookie
document.cookie = "user=Rahul";
console.log("Q3:", document.cookie);

// Q4: Add and remove city in localStorage
localStorage.setItem("city", "Mumbai");
localStorage.removeItem("city");
console.log("Q4:", localStorage.getItem("city")); // null

// Q5: Store and retrieve multiple values
localStorage.setItem("username", "Raj");
localStorage.setItem("theme", "light");

console.log("Q5 Username:", localStorage.getItem("username"));
console.log("Q5 Theme:", localStorage.getItem("theme"));

// Q6: Clear localStorage on button click
document.getElementById("clearBtn").onclick = function () {
  localStorage.clear();
  alert("LocalStorage Cleared");
};

// Q7: Store input value in localStorage
document.getElementById("saveBtn").onclick = function () {
  let value = document.getElementById("userInput").value;
  localStorage.setItem("inputValue", value);
  alert("Saved!");
};

// Q8: Retrieve username and display in h1
document.getElementById("usernameDisplay").innerHTML =
  localStorage.getItem("username");

// Q9: Update theme value
localStorage.setItem("theme", "dark");
console.log("Q9 Updated Theme:", localStorage.getItem("theme"));

// Q10: SessionStorage auto removal info
sessionStorage.setItem("tempData", "This will be removed after tab close");
console.log("Q10:", sessionStorage.getItem("tempData"));
