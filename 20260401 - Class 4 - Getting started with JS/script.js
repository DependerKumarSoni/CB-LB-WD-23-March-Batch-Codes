// arr = ["javascript", "python", "java", "c++", "ruby"];
// console.log("Array:");
// console.log(arr);
// console.log("Type of arr:", typeof arr);


// var obj = {
//     name: "Alice",
//     age: 25,
//     isStudent: true,
//     hobbies: ["reading", "coding", "gaming"]
// };

// CRUD operations on object
// Create - Read - Update - Delete


// Let's begin with an empty object

var person = {};
console.log("Initial person object:", person);

// Create - Adding properties to the object
person.name = "Bob";
person.age = 30;
person.isStudent = false;
person.hobbies = ["hiking", "photography"];

person["country"] = "USA"; // Another way to add properties
person["favorite color"] = "blue"; // Property name with space

console.log("After adding properties:", person);

// arr = ["javascript", "python", "java", "c++", "ruby"];
// arr[3];

console.log("----------------------------------");
console.log("Accessing properties:");
console.log("Name:", person.name);
console.log("Age:", person["age"]);
console.log("Country:", person.country);
console.log("Favorite Color:", person["favorite color"]);
console.log("First hobby:", person.hobbies[0]);
console.log("Second hobby:", person["hobbies"][1]);



// Update - Modifying existing properties
person.age = 31; // Update age
person["favorite color"] = "green"; // Update favorite color
person.hobbies[1] = "traveling"; // Update second hobby

console.log("After updating properties:", person);

// Delete - Removing properties from the object
delete person.isStudent;

console.log("After deleting isStudent property:", person);





















// console.log("Operators in JavaScript");

// // ternary operator

// age = 18;
// // condition ? expressionIfTrue : expressionIfFalse
// var canVote = (age >= 18) ? "Yes, you can vote!" : "No, you cannot vote yet.";
// console.log(canVote);

// var x = 10;
// var y = 20;

// console.log("x > y:", x > y);
// console.log("x < y:", x < y);

// console.log("----------------------------------");

// // precedence of operators: airthmetic > comparison > logical
// console.log("x==y:" + (x == y));
// console.log("x>y:" + (x > y));
// console.log("😊😊");
// console.log("x<y:" + x < y); // ==> "x<y:10" < 20 => false
// console.log("😊😊");

// console.log(10 + 5 == 5);
// console.log(5 == 5 + 10);



// console.log("Arithmetic Operators:");
// var a = 10;
// var b = 5;
// console.log("a + b =", a + b); // Addition
// console.log("a - b =", a - b);  // Subtraction
// console.log("a * b =", a * b);  // Multiplication
// console.log("a / b =", a / b);  // Division
// console.log("a % b =", a % b);  // Modulus
// console.log("a ** b =", a ** b); // Exponentiation
// console.log("++a =", ++a); // Pre-increment
// console.log("b++ =", b++); // Post-increment
// console.log("a-- =", a--); // Post-decrement
// console.log("--b =", --b); // Pre-decrement
// console.log("------------------------------");

// console.log("Comparison Operators:");

// var x = 10;
// var y = 10;

// console.log((x == y) + 23); // Equal to
// console.log("x != y:", x != y); // Not equal to

// console.log("x === y:", x === y); // Strict equal to
// console.log("x !== y:", x !== y); // Strict not equal to

// console.log("x > y:", x > y); // Greater than
// console.log("x < y:", x < y); // Less than
// console.log("x >= y:", x >= y); // Greater than or equal to
// console.log("x <= y:", x <= y); // Less than or equal to
// console.log("------------------------------");








// console.log("Hi how are you all?");
// console.log("Welcome to the world of JavaScript!");

// var Name = "John";
// var age = 30;
// var isStudent = true;
// var hobbies = ["reading", "coding", "gaming"];

// console.log("Name: " + Name, typeof Name);
// console.log("Age: " + age, typeof age);
// console.log("Is Student: " + isStudent, typeof isStudent);
// console.log(hobbies, typeof hobbies);

// console.log("------------------------------");

// Name = "Abraham";
// age = '43';
// isStudent = false;
// hobbies = ["Masti", "Masti++", "kuch bhi"];

// console.log("Name: " + Name, typeof Name);
// console.log("Age: " + age, typeof age);
// console.log("Is Student: " + isStudent, typeof isStudent);
// console.log(hobbies, typeof hobbies);

// console.log("------------------------------");

