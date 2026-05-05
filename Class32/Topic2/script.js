// Patterns
let namePattern = /^[A-Za-z]+$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let phonePattern = /^\d{10}$/;
let passwordPattern = /^.{6,}$/;

// Q1 & Q2: Name validation
document.getElementById("btn1").onclick = function () {
  let name = document.getElementById("name1").value;
  console.log(namePattern.test(name));
};

// Q3: Email validation
document.getElementById("btn2").onclick = function () {
  let email = document.getElementById("email").value;
  console.log(emailPattern.test(email));
};

// Q4: Phone validation (10 digits)
document.getElementById("btn3").onclick = function () {
  let phone = document.getElementById("phone").value;
  console.log(phonePattern.test(phone));
};

// Q5: Password validation (min 6 chars)
document.getElementById("btn4").onclick = function () {
  let pass = document.getElementById("password").value;
  console.log(passwordPattern.test(pass));
};

// Q6: Function for validation
function validate(value, pattern) {
  return pattern.test(value);
}

// Q7: Validate all inputs
document.getElementById("btn5").onclick = function () {
  let name = document.getElementById("name2").value;
  let email = document.getElementById("email2").value;
  let phone = document.getElementById("phone2").value;

  console.log("Name:", validate(name, namePattern));
  console.log("Email:", validate(email, emailPattern));
  console.log("Phone:", validate(phone, phonePattern));
};

// Q8: ^ and $
let str = "Hello";
let pattern1 = /^H.*o$/;
console.log("Q8:", pattern1.test(str));

// Q9: Only digits using \d
let numStr = "12345";
let digitPattern = /^\d+$/;
console.log("Q9:", digitPattern.test(numStr));

// Q10: Form validation
document.getElementById("form1").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("fname").value;
  let email = document.getElementById("femail").value;
  let phone = document.getElementById("fphone").value;

  console.log("Name:", namePattern.test(name));
  console.log("Email:", emailPattern.test(email));
  console.log("Phone:", phonePattern.test(phone));
});
