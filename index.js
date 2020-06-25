// Create a function that takes an array of numbers and returns a string.

// 0 Repeat the previously decrypted value
// The next number after 0 denotes number of repetitions to be done.
// 1, 2, 3, 4 = g, o, l, e
// 5 Convert previous letter to uppercase.
// 6 Add a point to the end.
// 7 Change case of the first letter.
// 8 Reverse the string.
// 9 Clear the actual decrypted string.
function numToGoogle(stringArray) {
  return stringArray.reduce((a, b) => a + decryptString(b), "");
}
function decryptString(input) {
  let output = [];
  let lastCharacter = "";
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "1":
        output.push("g");
        break;
      case "2":
        output.push("o");
        break;
      case "3":
        output.push("l");
        break;
      case "4":
        output.push("e");
        break;
      case "5":
        if (input[i] === "5") {
          let previousCharacter = output.pop();
          output.push(previousCharacter.toUpperCase());
        }
        break;
      case "6":
        lastCharacter = ".";
        break;
      case "7":
        let firstCharacter = output.shift();
        output.unshift(firstCharacter.toUpperCase());

        break;
      case "8":
        output = output.reverse();
        break;
      case "9":
        output = [];
        break;
      case "0":
        let previousCharacter = output.pop();
        for (let j = 0; j < parseInt(input[i + 1]); j++) {
          output.push(previousCharacter);
        }
        i++;
        break;
    }
  }
  let outputString = output.join("");
  outputString += lastCharacter;
  return outputString;
}
console.log(numToGoogle(["12213467"]) === "Google.");
console.log(numToGoogle(["12213467", "321"]) === "Google.log");
console.log(numToGoogle(["12213467", "321", "122906"]) === "Google.log");
console.log(numToGoogle(["15", "2502", "15", "345"]) === "GOOGlE");
console.log(numToGoogle(["15", "2502", "15", "35", "45"]) === "GOOGLE");
console.log(numToGoogle(["15", "202", "1", "3", "4"]) === "Google");
console.log(numToGoogle(["12348"]) === "elog");
console.log(numToGoogle(["123489"]) === "");
console.log(numToGoogle(["612348"]) === "elog.");
console.log(numToGoogle(["1234896"]) === ".");
