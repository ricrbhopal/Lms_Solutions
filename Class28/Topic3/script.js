// Q1
let details = {
  name: "Raj",
  age: 23,
  city: "Mumbai",
};

console.log(Object.keys(details));

// Q2
let product = {
  Name: "Laptop",
  Brand: "Dell",
  Price: 75000,
  Configuration: "16 GB, 512 GB",
};

console.log(Object.values(product));

// Q3
const studentData = [
  {
    Name: "Raunit Singh",
    RollNo: "0161CS221059",
    Course: "B-Tech",
    Branch: "CSE",
    Email: "raunit@001234",
  },
  {
    Name: "Satru",
    RollNo: "0161MI221027",
    Course: "B-Tech",
    Branch: "MI",
    Email: "satru@1234",
  },

  {
    Name: "Deepak",
    RollNo: "0161EX221008",
    Course: "B-Tech",
    Branch: "EX",
    Email: "deepak@0034",
  },
];
studentData.forEach((student) => {
  console.log(Object.entries(student));
});

// Q4
Object.keys(studentData).forEach((key) => {
  console.log(key);
});

// Q5
Object.values(studentData).forEach((value) => {
  console.log(value);
});

// Q6
let ElectronicDevice = {
  Brand: "Dell",
  Price: 68000,
};

Object.keys(ElectronicDevice).forEach((key) => {
  console.log(key);
});

Object.values(ElectronicDevice).forEach((value) => {
  console.log(value);
});

// Q7
Object.entries(product).forEach((entry) => {
  console.log(entry);
});

// Q8
let sd = {
  std1: "a",
  std2: "b",
  std3: "c",
  std4: "d",
  std5: "e",
};

console.log(Object.keys(sd).length);

// Q9
let sd1 = {
  std1: "a",
  std2: "b",
  std3: "c",
  std4: "d",
  std5: "e",
};

console.log(Object.entries(sd1));

// Q10
const studentData1 = {
  Name: "Raunit Singh",
  RollNo: "0161CS221059",
  Course: "B-Tech",
  Branch: "CSE",
  Email: "raunit@001234",
};

console.log(Object.keys(studentData1));
console.log(Object.values(studentData1));
console.log(Object.entries(studentData1));
