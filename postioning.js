// PROBLEM 2 multiple numbers to represent all the places in the string that it shows up.

var myObject = {}
function countLetters(string) {
var noSpaceString = string.split(" ").join("")
   for (var i = 0; i < noSpaceString.length; i++ ) {

if (!myObject[noSpaceString[i]]) {
   myObject[noSpaceString[i]] = [i]       // THIS MAKES THE KEY = AN ARRAY WITH THE ELEMENT INDEX IN IT
} else {
myObject[noSpaceString[i]].push(i)
  }                                              // THIS MAKES THE KEY PUSH THE ELMENT IN IT IF THE LETTER REPEATS
 }
return myObject
}

console.log(countLetters("lighthouse in the house"))