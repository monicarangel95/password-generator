// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  // you can create a function named generatePassword that creates the password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

// array 
var chosen = [];

// asking user password criteria
var upper = confirm("Insert uppercase letters?");
var lower = confirm("Insert lowercase letters?");
var special = confirm("Insert special characters?");
var number = confirm("Insert numbers?");

// validating input
while((upper === false) && (lower === false) && (special === false) && (number === false)) {
alert ("Choose a specification:");
var upper = confirm("Insert uppercase letters?");
var lower = confirm("Insert lowercase letters?");
var special = confirm("Insert special characters?");
var number = confirm("Insert numbers?");
}

// password length 
var userLength = prompt ("How long would you like your password? Please choose between 8-128.");
while ((useerLength < 8) || (passLength > 128)){
  alert("Please choose between 8-128.");
  userLength = prompt("How long would you like your password?");
} 
// array for pass criteria
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["\"","!","#","$","%","&","\'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];
var num = ["0","1","2","3","4","5","6","7","8","9"];

// uppercase inserted and chosen
if (upper) {
  for(var i = 0; i < upperCase. length; i++ ){
    chosen.push(upperCase[i]);

  }
}
// lowercase inserted and chosen
if(lower){
  for(var j=0; j < lowerCase.length; j++){
    chosen.push(lowerCase[j]);
  }
}
// special inserted and chosen
if(special){
  for(var k=0; k < specialChar.length; k++){
    chosen.push(specialChar[k]);
  }
}

// numbers inserted and chosen
if(number){
  for(var l=0; l < num.length; l++){
    chosen.push(num[l]);
  }
}
// final result stores all password critera 
var finalResult = [];
for(m=0; m < userLength; m++){
  finalResult.push(chosen[Math.floor(Math.random()*chosen.length)]);
}

// return finalResult with randomized chars as long as userLength joining array into strings
return(finalResult.join(""));

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
