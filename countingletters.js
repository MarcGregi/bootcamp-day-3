var myObject = {}

function countLetters(string) {

var noSpaceString = string.split(" ").join("")
console.log(" gives noSpacestring: ", noSpaceString)

for (var i = 0; i < noSpaceString.length; i++ ) {

if (!myObject[noSpaceString[i]]) {
   myObject[noSpaceString[i]] = 1
 }
 else {myObject[noSpaceString[i]] ++}

 }
  return myObject
}

console.log(countLetters("lighthouse in the house"))

// remove the spaces from the string sentence

// create a function that can extract the value from the letters of the sentence

// create keys for the myObject that have the value of the frequency of the letter without repeating the letter