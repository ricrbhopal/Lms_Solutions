// Assignment 1
document.getElementById("form1").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;

  let result = document.getElementById("result1");
  result.style.display = "block";
  result.innerHTML = "Name: " + name + "<br>City: " + city;
});

// Assignment 2
document.getElementById("form2").addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let result = document.getElementById("result2");
  result.style.display = "block";
  result.innerHTML = "Email: " + email + "<br>Password: " + password;

  document.body.style.backgroundColor = "#f0f0f0";
});

// Assignment 3
document.getElementById("form3").addEventListener("submit", function (e) {
  e.preventDefault();

  let first = document.getElementById("firstName").value;
  let last = document.getElementById("lastName").value;

  let result = document.getElementById("result3");
  result.style.display = "block";
  result.innerHTML = "Full Name: " + first + " " + last;
});
