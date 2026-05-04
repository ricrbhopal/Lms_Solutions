//  Q1: Create JSON object with name, age, city
let obj1 = {
  name: "Raj",
  age: 22,
  city: "Mumbai",
};
console.log("Q1:", obj1);

// Q2: JSON object with name and array of marks
let obj2 = {
  name: "Amit",
  marks: [80, 75, 90],
};
console.log("Q2:", obj2);

// Q3: JSON object with nested object
let obj3 = {
  student: {
    name: "Rohit",
    age: 21,
  },
};
console.log("Q3:", obj3);

// Q4: JSON object with different data types
let obj4 = {
  name: "Suresh",
  age: 25,
  isStudent: true,
  address: null,
};
console.log("Q4:", obj4);

// Q5: Convert JS object to JSON string
let obj5 = { name: "Raj", age: 22 };
let jsonString1 = JSON.stringify(obj5);
console.log("Q5 JSON:", jsonString1);

// Q6: Convert JSON string to JS object
let jsonStr2 = '{"name":"Amit","age":24}';
let obj6 = JSON.parse(jsonStr2);
console.log("Q6 Object:", obj6);

// Q7: Parse JSON and print specific key
let jsonStr3 = '{"name":"Ravi","age":23}';
let obj7 = JSON.parse(jsonStr3);
console.log("Q7 Name:", obj7.name);

// Q8: JSON with array and access value after parsing
let jsonStr4 = '{"name":"Raj","marks":[70,80,90]}';
let obj8 = JSON.parse(jsonStr4);
console.log("Q8 Marks[1]:", obj8.marks[1]);

// Q9: Convert JS object into JSON
let obj9 = { city: "Delhi", population: 2000000 };
let jsonString2 = JSON.stringify(obj9);
console.log("Q9 JSON:", jsonString2);

// Q10: Convert JSON string to object and print property
let jsonStr5 = '{"name":"Ankit","age":26}';
let obj10 = JSON.parse(jsonStr5);
console.log("Q10 Age:", obj10.age);
