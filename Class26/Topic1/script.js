// Q1: Create empty array & add users using push()
let users = [];

users.push({ id: 1, name: "Amit" });
users.push({ id: 2, name: "Rohit" });


// Q2: Print all users
console.log("Q2 All Users:", users);


// Q3: Access first user
console.log("Q3 First User:", users[0]);


// Q4: Find user by id
let user1 = users.find(u => u.id === 1);
console.log("Q4 Found User:", user1);


// Q5: Update user using find()
let userToUpdate = users.find(u => u.id === 2);
if (userToUpdate) {
  userToUpdate.name = "Suresh";
}
console.log("Q5 Updated Users:", users);


// Q6: Change name "Amit" to "Rahul"
let amitUser = users.find(u => u.name === "Amit");
if (amitUser) {
  amitUser.name = "Rahul";
}
console.log("Q6 Name Changed:", users);


// Q7 & Q8: Remove user using filter()
let filteredUsers = users.filter(u => u.id !== 1);
console.log("Q7/8 After Delete:", filteredUsers);


// Q9: Add two users & print
let usersList1 = [];
usersList1.push({ id: 1, name: "A" });
usersList1.push({ id: 2, name: "B" });

console.log("Q9 Users:", usersList1);


// Q10: Add, update, print
let usersList2 = [];
usersList2.push({ id: 1, name: "Amit" });
usersList2.push({ id: 2, name: "Ravi" });

// Update
let updateUser = usersList2.find(u => u.id === 2);
if (updateUser) {
  updateUser.name = "Vikas";
}

console.log("Q10 Updated List:", usersList2);


// Q11: Add, delete, print

let usersList3 = [];
usersList3.push({ id: 1, name: "Amit" });
usersList3.push({ id: 2, name: "Ravi" });

// Delete user with id 1
usersList3 = usersList3.filter(u => u.id !== 1);

console.log("Q11 Remaining Users:", usersList3);


// Q12: Complete CRUD Program
let userDB = [];

// CREATE
userDB.push({ id: 1, name: "Amit" });
userDB.push({ id: 2, name: "Rohit" });
console.log("CRUD Create:", userDB);

// READ
console.log("CRUD Read:", userDB);

// UPDATE (id = 2)
let update = userDB.find(u => u.id === 2);
if (update) {
  update.name = "Mohit";
}
console.log("CRUD Update:", userDB);

// DELETE (id = 1)
userDB = userDB.filter(u => u.id !== 1);
console.log("CRUD Delete:", userDB);