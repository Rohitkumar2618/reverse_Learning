// // call back function returns practice

// function square(n) {
//   return n * n;
// }

// function sumOfsquares(a, b) {
//   const val1 = square(a);
//   const val2 = square(b);

//   return val1 + val2;
// }

// // using another variable
// let ans = sumOfsquares(1, 2);
// console.log(ans);

// // pass directly to the console
// console.log(sumOfsquares(1, 2));

// !!! the real call back function use

function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

function performSomething(a, b, fn) {
  const val1 = fn(a);
  const val2 = fn(b);

  return val1 + val2;
}

console.log(performSomething(1, 2, square));
console.log(performSomething(1, 2, cube));

//! Another example

function square(a) {
  return a * a;
}

function cube(a) {
  return a * a * a;
}

function performSomething(a, b, callback) {
  const val1 = callback(a);
  const val2 = callback(b);

  return val1 + val2;
}

console.log(performSomething(1, 2, square));
console.log(performSomething(1, 2, cube));
