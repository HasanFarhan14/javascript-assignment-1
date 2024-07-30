//   CHAPTER#1
// 1
alert("first name ")
alert(" last name")
alert("phone number ")
alert("email ")
alert("password ")
// 2
alert("You're learning JavaScript!");

//  3
alert("  I am learning java script from jawan pakistan");


// chapter 2
// 1
var myname = ("HASAN");

// 2
var myFavoriteFood;
myFavoriteFood = ("Pizza");

//  3
var teamName;
teamName = ("JAWAN PAKISTAN");
alert(teamName);

//  4
var bestMan = ("Charlie");
bestMan = ("Mike");

// CHAPTER #3
// 1

let caseQty;

// 2
var caseQty = 144;

// 3
var num = parseInt("9");

// 4
var sum;
sum = 5 + 3;

// 5
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
var ordertotal = 100+10;
var ordertotal = 110;

// 6
var total = 50;
total = total + 25;

// chapter #4
// 1
var productCost = (3.45);

// 2
var nameofBand;

// 3
var totalCost =( 25.99);

// 4
var HASANFARHAN;

// 5
// Legal Variables:

// helloWorld
// HelloWorld
// HELLO_WORLD

// Illegal Variables:

// 1a
// a-b
// a.b

// CHAPTER #5
// 1

// 2
var num = 20 % 6;
var num = 2

// 3
var largeNum = 1000 * 2000;

// 4
var a = 10;
var b = 5;
var result = a - b;

// 5
var remainderValue = 17 % 5;

// 6
var num1 = 4;
var num2 = 6;
alert("The result of the multiplication is: " + num1 * num2);

// chapter #6
// 1
x += 1;

// 2
x--;

// 3

x = 50
y = x++ 
 // y gets 50, x becomes 51

//  4
y = 50
z = --y 
// y becomes 49, z gets 49

// 5
var newNum = num--;

// 6
var originalValue = num;
num += 1;

// 7
var num = 5; 
num += 1; 
alert(num); 

// chapter #7
// 1
var calculatedNum = 2 + (2 * 6);
var calculatedNum = 2 + 12;
var calculatedNum = 14;


// 2
var calculatedNum = (2 + 2) * 6;
var calculatedNum = 4 * 6;
var calculatedNum = 24;

// 3
var calculatedNum = (2 + 2) * (4 + 2);
var calculatedNum = 4 * 6;
var calculatedNum = 24;

// 4
var calculatedNum = ((2 + 2) * 4) + 2;
var calculatedNum = (4 * 4) + 2;
var calculatedNum = 16 + 2;
var calculatedNum = 18;

// 5
let cost = (2 + (2 * 4)) + 10;
console.log(cost); // Output: 18 (not 56, calculation is incorrect)

// 6
let units = ((2 + 2) * 4) + 10;
console.log(units); // Output: 20
// 7
let pressure = (4 / 2) * 4;
console.log(pressure); // Output: 8 (not 5, calculation is incorrect)

// chapter #8
// 1
var num = "2" + "2";
// 2
message = "Hello," + "Dolly";
alert(message); 

// 3

alert("33" + 3);
 // outputs: "333"

//  4
alert("Pakistan " + "Zindabad");

// 5
var result = "The answer is " + 42;

// 6
var greeting = "Hello, ";
var name = "Dolly";
var message = greeting + name;
console.log(message);
 // outputs: "Hello, Dolly"

//  CHAPTER #9
// 1
var firstName = prompt("Enter first name");

// 2
var country = prompt("Country?", "China");

// 3
var yourName = prompt("Enter Your Name");

// 4
var favoriteorginization = prompt("What is your favorite orginization?", "JAWAN PAKISTAN");

// 5
var message = "What is your favorite hobby?";
var defaultResponse = "Reading";
var userInput = prompt(message, defaultResponse);

// 6
var userInput = prompt("What is your favorite color?", "Blue");
alert("You entered: " + userInput);

//  CHAPTER # 10
// 1
var city = "Karachi";
if (city === "Karachi") {
    console.log("The City OF Lights");
}

// 2
if (x === y) {
    var z = prompt("What is the value of z?");
  }

//   3
var ZipCode = "10010"
if (ZipCode === "10010") {
  alert("Karachi")
} else {
  alert("Please write correct city")
}

// 4
var x = 1;

if (x === 1) {
  x = 10;
}

console.log(x); 
// Output: 10

// CHAPTER #11
// 1
if (!(x === y)) {
   
  }

//   2
if (x >= y) {
    
  }

//   3
if (x !== 5) {
    x = 10;
  }

//   4
if (5 !== 3) {
    alert("Congratulations!");
  }

//   5

var firstName = prompt("Please enter your first name: ");


if (firstName!== "HASAN") {
  alert("No match");
}

// CHAPTER # 12
// 1
var a = 10;
var b = 5;

if (a >= b) {
  alert("a is greater than or equal to b");
} else {
  alert("a is less than b");
}

// 2
// Get marks from user
var marks = parseInt(prompt("Enter your marks (out of 100): "));

// Calculate percentage
var percentage = (marks / 100) * 100;

// Assign grade based on percentage
if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 80) {
  grade = "B";
} else if (percentage >= 70) {
  grade = "C";
} else if (percentage >= 60) {
  grade = "D";
} else {
  grade = "F";
}

// Display marksheet
alert("MARKSHEET\n" +
      "Marks: " + marks + "\n" +
      "Percentage: " + percentage.toFixed(2) + "%\n" +
      "Grade: " + grade);

    //   3
    var a = prompt("Enter the value of a: ");

if (a === 10) {
  alert("a is 10");
} else {
  alert("The correct value of a is 10");
}

// 4
var city = prompt("Please enter a city:");

if (city === "Karachi") {
  alert("You have entered Karachi.");
} else if (city === "Lahore") {
  alert("You have entered Lahore.");
} else {
  alert("You have entered a city other than Karachi or Lahore.");
}

// CHAPTER #13
// 1
if (a === b && c === d) {
    // code to execute if both conditions are true
  }

//   2
if (a === b || c!== d) {
    // code to execute if either or both conditions are true
  }

//   3
if ((name === "Hamza" || name === "Arsalan") && age < 60) {
    // code to execute if conditions are true
  }

//   4
var num1 = 10;
var num2 = 20;

if (num1 < num2 || num1 > num2) {
  alert("num1 is not equal to num2");
}

// 5
// Declare two variables and assign them your first and last name
let firstName = "hasan";
let lastName = "farhan";

// Prompt the user for their first and last name
let userInputFirstName = prompt("Please enter your first name:");
let userInputLastName = prompt("Please enter your last name:");

// Check if the user's input matches the variables
if (userInputFirstName === firstName && userInputLastName === lastName) {
  alert("Hello, " + firstName + " " + lastName + "!");
}

// chapter #14
// 1
var password = prompt("Please enter your password:");

if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
}

// 2
var a = 1;
var c = "Max";

if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

// 3
if (a === 1 && c === "Max") {
    alert("OK");
  }

//   4
let var1 = 10;
let var2 = 10;

if (var1 === var2) {
  if (var1 <= var2) {
    alert("The conditions are met!");
  }
}

// CHAPTER # 15
// 1
 var myArray = [];

//  2
var myArray = ["Hello"];

// 3
var alphabet = ["h","i","j","k"];
alert(alphabet[2]); // Output: "j"

// 4
var alphabet = ["h","i","j","k", "l", "m", "n", "o"];
alert(alphabet.length); // Output: 8

// 5
var myArray = ["Apple"];
myArray[1] = "Banana";
alert(myArray[1]); // Output: "Banana"

// CHAPTER # 16 ARRAY 2
// 1
var myArray = ["Hello"];
myArray.push("World");
alert(myArray[myArray.length - 1]); // Output: "World"

// 2
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();
alert(Alphabet); // Output: ["h", "i", "j"]

// 3
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(42);
alert(Alphabet); // Output: ["h", "i", "j", "k", 42]

// CHAPTER 16 ARRAY 3
// 1
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
alert(sizes); // Output: ["M", "XL", "XXL", "XXXL"]

// 2

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);
alert(sizes); // Output: [1, 2, 3, "S", "M", "XL", "XXL", "XXXL"]

// 3
var myArray = ["Hello"];
myArray.unshift("World");
alert(myArray[0]); // Output: "World"

// 4
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
alert(sizes); // Output: ["S", "M", "L", "XL", "XXL", "XXXL"]

// 5
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);
alert(regSizes); // Output: ["S", "M", "XL"]

// 6
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "elephant", "tiger");
alert(pets); // Output: ["dog", "elephant", "tiger", "frog"]

// 7
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);
alert(pets); // Output: ["dog", "duck", "frog"]

// 8
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
pets = pets.slice(3, 5);
alert(pets); // Output: ["duck", "frog"]

// CHAPTER 17-20 ( FOR LOOPS)
// 1
for (var i = 0; i < 10; i++) {
  // code to be executed
}

// 2
for (var i = 0; i <= 11; i++) {
  // code to be executed
}

// 3
for (var i = 0; i <= 4; i++)

  // 4
  for (var counter = 0; counter < 100; counter++) {
    // code to be executed
  }

  // 5
  for (var i = 3; i > 0; i--) {
    // code to be executed
  }
  // 6
  var length = myArray.length;

// 7
var flag = true;
// 8
for (var i = 0; i < pets.length; i++) {
  // code to be executed
}
// 9
for (var i = 0; i < 10; i++) {
  if (i === 1) {
    alert(i);
    break;
  }
}
// 10
var userNames = [];
var firstName = prompt("Enter first name");
userNames.push(firstName);

for (var i = 0; i < userNames.length; i++) {
  if (firstName === userNames[i]) {
    alert("Enter");
  } else {
    alert("Please write correct user name");
  }
}
// 11
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}
if (!matchFound) {
  alert("No match found");
}
// 12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
  for (var j = 0; j < secondArr.length; j++) {
    alert(firstArr[i] + secondArr[j]);
  }
}

