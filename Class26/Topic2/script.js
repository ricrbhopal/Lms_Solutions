// Q1: Add one element using push()
let arr1 = [1, 2, 3];
arr1.push(4);
console.log("Q1:", arr1);


// Q2: Add two elements using push()
let arr2 = [10, 20];
arr2.push(30, 40);
console.log("Q2:", arr2);


// Q3: Remove last element using pop()
let arr3 = [5, 6, 7];
arr3.pop();
console.log("Q3:", arr3);

// Q4: Store removed element from pop()
let arr4 = [100, 200, 300];
let removedPop = arr4.pop();
console.log("Q4 Removed:", removedPop);
console.log("Q4 Array:", arr4);



// Q5: Add element at beginning using unshift()
let arr5 = [2, 3];
arr5.unshift(1);
console.log("Q5:", arr5);


// Q6: Add two elements at beginning using unshift()
let arr6 = [30, 40];
arr6.unshift(10, 20);
console.log("Q6:", arr6);

// Q7: Remove first element using shift()
let arr7 = [9, 8, 7];
arr7.shift();
console.log("Q7:", arr7);


// Q8: Store removed element using shift()
let arr8 = [50, 60, 70];
let removedShift = arr8.shift();
console.log("Q8 Removed:", removedShift);
console.log("Q8 Array:", arr8);

// Q9: splice() remove elements
let arr9 = [1, 2, 3, 4, 5];
arr9.splice(2, 2); // remove 2 elements from index 2
console.log("Q9:", arr9);


// Q10: splice() add elements
let arr10 = [1, 2, 5];
arr10.splice(2, 0, 3, 4); // add at index 2
console.log("Q10:", arr10);

// Q11: splice() replace element
let arr11 = [10, 20, 30];
arr11.splice(1, 1, 25); // replace index 1
console.log("Q11:", arr11);

// Q12: Combined operations
let arr12 = [1, 2];

// push
arr12.push(3);
console.log("After push:", arr12);

// pop
arr12.pop();
console.log("After pop:", arr12);

// unshift
arr12.unshift(0);
console.log("After unshift:", arr12);

// shift
arr12.shift();
console.log("After shift:", arr12);
