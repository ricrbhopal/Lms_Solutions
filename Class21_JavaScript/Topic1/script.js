console.log("Hello World");
console.log("hi");

/* Show alert message */
function showMessage() {
    alert("Hello!");
}

/* Add new Submit button inside myDiv */
function Addbutton() {
    let btn = document.createElement("button");
    btn.innerHTML = "Submit";
    document.getElementById("myDiv").appendChild(btn);
}

/* Run code only after page loads */
window.onload = function () {

    /* Select box element */
    let element = document.getElementById("box");
    console.log(element);

    /* Change box text */
    document.getElementById("box").innerHTML = "New Text in Box";

    console.log("When button is clicked, JavaScript function runs.");

    /* Create new div */
    let div = document.createElement("div");
    div.innerHTML = "New Div Added";
    document.body.appendChild(div);

    /* Create dynamic button */
    let btn1 = document.createElement("button");
    btn1.innerHTML = "Click Me";
    document.body.appendChild(btn1);

    /* Add paragraph inside myDiv */
    let p = document.createElement("p");
    p.innerHTML = "Paragraph inside Div";
    document.getElementById("myDiv").appendChild(p);

    /* Create 3 buttons dynamically */
    for (let i = 1; i <= 3; i++) {
        let btn = document.createElement("button");
        btn.innerHTML = "Button " + i;
        document.body.appendChild(btn);
    }

    /* Create heading dynamically */
    let h1 = document.createElement("h1");
    h1.innerHTML = "Welcome Heading";
    document.body.appendChild(h1);
};

/* Add new text inside box */
function addText() {
    document.getElementById("box").innerHTML += "<p>New Text Added</p>";
}

/* Change clicked button text */
function changeText(btn) {
    btn.innerHTML = "Clicked!";
}

/* Show name inside webpage */
function showName() {
    document.getElementById("nameBox").innerHTML = "Raj Gupta";
}

/* Display message in console and webpage */
function displayMessage() {
    console.log("Hello");
    document.body.innerHTML += "<p>Hello</p>";
}

/* JavaScript behavior example */
function behaviorExample() {
    document.getElementById("box").innerHTML = "Changed by JavaScript";
}

/* Mini project: add new button every click */
function addNewButton() {
    let btn = document.createElement("button");
    btn.innerHTML = "New Button";
    document.body.appendChild(btn);
}