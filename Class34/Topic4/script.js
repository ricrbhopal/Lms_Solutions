// Q1: Create cookie and print
function q1() {
  document.cookie = "username=Rahul";
  console.log("Q1:", document.cookie);
}

// Q2: Cookie with expiry
function q2() {
  let date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000); // 1 day
  document.cookie = "username=Rahul; expires=" + date.toUTCString();
  console.log("Q2:", document.cookie);
}

// Q3: Multiple cookies
function q3() {
  document.cookie = "user=Rahul";
  document.cookie = "age=22";
  console.log("Q3:", document.cookie);
}

// Q4: Update cookie
function q4() {
  document.cookie = "username=Amit";
  console.log("Q4:", document.cookie);
}

// Q5: Delete cookie
function q5() {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  console.log("Q5:", document.cookie);
}

// Q6: Store theme and display
function q6() {
  document.cookie = "theme=dark";
  document.getElementById("themeDisplay").innerHTML = document.cookie;
}

// Q7: Refresh check
function q7() {
  document.cookie = "check=Persist";
  alert("Refresh page → cookie will still exist");
  console.log("Q7:", document.cookie);
}

// Q8: Session cookie
function q8() {
  document.cookie = "sessionUser=Rahul"; // no expiry
  alert("Close browser → session cookie will be removed");
  console.log("Q8:", document.cookie);
}
