// !Write the program where you can show user first  name and last name
let firstName = "RK";
let Lastname = "Darunde";
console.log(" My name is " + firstName + " and Lastname is " + Lastname);

// ! chech the user is married or not

let firstName = "RK";
isMarried = false;

if (isMarried == true) {
  console.log(firstName + " is  married");
} else {
  console.log(firstName + " is not married");
}

// ! write the program that count from 0 to 10 using the loop

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ! count even numbers from the array
//

// !Write the biggest number in the array
let arr = [1, 2, 3, 4, 5, 12, 7, 8, 9, 10];
let biggestNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > biggestNumber) {
    biggestNumber = arr[i];
  }
}

console.log(biggestNumber);

// ! sorting the users data from object according to there gender

// ! its a array of objects
let users = [
  { Fname: "John", gender: "male" },
  { Fname: "Adesh", gender: "male" },
  { Fname: "Sandesh", gender: "male" },
  { Fname: "komal", gender: "female" },
];

for (let i = 0; i < users.length; i++) {
  if (users[i]["gender"] == "male") {
    console.log(users[i]["Fname"]);
  }
}

// ! write the program that prints all the objects from the  inside the loop

let users = [
  { Fname: "John", gender: "male" },
  { Fname: "Adesh", gender: "male" },
  { Fname: "Sandesh", gender: "male" },
  { Fname: "komal", gender: "female" },
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]["Fname"]);
}

// ! write the program that prints reverse of the array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = arr.length; i >= 0; i--) {
  console.log(arr[i]);
}

// !sum of two numbers using function

function sum(a, b) {
  return a + b;
}

let sumOf = sum(1, 2);

console.log(sumOf);

// ! calling a function inside the function

function calculateArithmetic(a, b, arithmaticFunction) {
  const ans = arithmaticFunction(a, b);

  return ans;
}

function sum(a, b) {
  return a + b;
}

// !! Here we pass the third argument as a  function to calculate arithmetic functoons ---> Its call  as a function callback

const value = calculateArithmetic(1, 2, sum);

console.log(value);
