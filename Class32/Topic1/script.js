// Q1
document.getElementById("btn1").onclick = function () {
  console.log(document.getElementById("input1").value);
};

// Q2 & Q3
document.getElementById("btn2").onclick = function () {
  let checked = document.getElementById("check1").checked;
  console.log(checked);
  alert(checked ? "Subscribed" : "Not Subscribed");
};

// Q4
document.getElementById("btn3").onclick = function () {
  let gender = document.querySelector('input[name="gender"]:checked');
  alert(gender ? gender.value : "Select gender");
};

// Q5
document.getElementById("btn4").onclick = function () {
  console.log(document.getElementById("city").value);
};

// Q6
document.getElementById("btn5").onclick = function () {
  let file = document.getElementById("fileInput").files[0];
  console.log(file ? file.name : "No file selected");
};

// Q7
document.getElementById("btn6").onclick = function () {
  let name = document.getElementById("name1").value;
  let agree = document.getElementById("agree").checked;
  alert("Name: " + name + " | Agree: " + agree);
};

// Q8
document.getElementById("btn7").onclick = function () {
  let gender = document.querySelector('input[name="gender2"]:checked');
  let city = document.getElementById("city2").value;
  alert("Gender: " + (gender ? gender.value : "") + " | City: " + city);
};

// Q9
document.getElementById("input9").addEventListener("input", function () {
  console.log(this.value);
});

// Q10
document.getElementById("btn8").onclick = function () {
  let name = document.getElementById("name2").value;
  let check = document.getElementById("check2").checked;
  let city = document.getElementById("city3").value;

  alert("Name: " + name + " | Agree: " + check + " | City: " + city);
};
