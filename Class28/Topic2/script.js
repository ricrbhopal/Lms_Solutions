// Q1: Access value using dot notation
let obj1 = { name: "Raj", age: 22 };
console.log("Q1:", obj1.name);

// Q2: Access value using bracket notation
let obj2 = { name: "Amit", age: 25 };
console.log("Q2:", obj2["age"]);

// Q3: Print name and city using dot notation
let obj3 = { name: "Rohit", city: "Delhi" };
console.log("Q3 Name:", obj3.name);
console.log("Q3 City:", obj3.city);

// Q4: Access values using bracket notation only
let obj4 = { name: "Suresh", city: "Mumbai" };
console.log("Q4 Name:", obj4["name"]);
console.log("Q4 City:", obj4["city"]);

// Q5: Use variable key with bracket notation
let obj5 = { name: "Raj", age: 22 };
let key = "name";
console.log("Q5:", obj5[key]);

// Q6: Key with space ("full name")
let obj6 = { "full name": "Amit Kumar" };
console.log("Q6:", obj6["full name"]);

// Q7: Key starting with number ("123value")
let obj7 = { "123value": 100 };
console.log("Q7:", obj7["123value"]);

// Q8: Nested object access using dot notation
let obj8 = {
  student: {
    address: {
      city: "Bhopal",
    },
  },
};
console.log("Q8:", obj8.student.address.city);

// Q9: Nested object access using bracket notation
console.log("Q9:", obj8["student"]["address"]["city"]);

// Q10: Mixed notation (dot + bracket)
console.log("Q10:", obj8.student["address"].city);
