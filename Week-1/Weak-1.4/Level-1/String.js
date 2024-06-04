// ! To get the length of the string
// function getLength(str) {
//   console.log("Original String:", str);
//   console.log("Length:", str.length);
// }
// getLength("Hello World");

//! Find the index of the any particular element
//! indexOf
// function findIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.indexOf(target));
// }
// findIndexOf("Hello World", "World");

//! lastIndexOf
// if we add same two words in the string and we want to find the last one of the index we use this
// function findLastIndexOf(str, target) {
//   console.log("Original String:", str);
//   console.log("Index:", str.lastIndexOf(target));
// }
// findLastIndexOf("Hello World World", "World");

// !slice
// !Its use when we want to cut the particular part of the string ---> jo value dete hai utna hi part dikhane me kam aata hai ye
// function getSlice(str, start, end) {
//   console.log("Original String:", str);
//   console.log("After slice:", str.slice(start, end));
// }
// getSlice("Hello World", 0, 5);

// substring
// function getSubstring(str, start, end) {
//   console.log("Original String:", str);
//   console.log("After substring:", str.substring(start, end));
// }
// getSubstring("Hello World", 0, 5);

// !replacing the partiular element from the string
// --->second argument pass as ki kiske badle change hona chahiye and third
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");
