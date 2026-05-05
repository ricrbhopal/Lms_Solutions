// Q1
document.getElementById("btn1").addEventListener("click", function () {
  alert("Clicked!");
});


// Q2
document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("para1").innerHTML = "Button Pressed";
});

// Q3
document.getElementById("btn3").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});

// Q4
document.getElementById("btn4").addEventListener("dblclick", function () {
  alert("Double Clicked!");
});

// Q5
document.getElementById("para2").addEventListener("dblclick", function () {
  this.style.color = "blue";
});

// Q6
document.getElementById("para3").addEventListener("mouseover", function () {
  this.style.color = "red";
});

// Q7
document.getElementById("heading1").addEventListener("mouseover", function () {
  document.getElementById("msg").innerHTML = "Mouse is here!";
});

// Q8
document.getElementById("btn5").addEventListener("click", function () {
  this.innerHTML = "Clicked Successfully";
});

// Q9
document.getElementById("clickBtn").addEventListener("click", function () {
  alert("Single Click Event");
});

document
  .getElementById("dblClickBtn")
  .addEventListener("dblclick", function () {
    alert("Double Click Event");
  });

// Q10
document.getElementById("para4").addEventListener("mouseover", function () {
  this.style.color = "green";
});

document.getElementById("para4").addEventListener("click", function () {
  alert("Paragraph Clicked!");
});
