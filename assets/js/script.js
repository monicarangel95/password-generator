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
let upper = confirm("Insert uppercase letters?");
let lower = confirm("Insert lowercase letters?");
let special = confirm("Insert special characters?");
var number = confirm("Insert numbers?");

// validating input
while((upper === false) && (lower === false) && (special === false) && (number === false)) {
alert ("Choose a specification:");
let upper = confirm("Insert uppercase letters?");
let lower = confirm("Insert lowercase letters?");
let special = confirm("Insert special characters?");
var number = confirm("Insert numbers?");
}

// password length 
var passLength = prompt ("How long would you like your password? Please choose between 8-128.");
while ((passLength < 8) || (passLength > 128)){
  alert("Please choose between 8-128.");
  passLength = prompt("How long would you like your password?");
} 
// array for pass criteria
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialChar = ["\"","!","#","$","%","&","\'","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","`","{","|","}","~"];
var num = ["0","1","2","3","4","5","6","7","8","9"];

// uppercase inserted and chosen
if (upper) {
  for(var i = 0; i < upperCase. length; i++ ){
    inserted.chosen(upperCase[i]);

  }
}
// lowercase inserted and chosen
if(lower){
  for(var j=0; j < lowerCase.length; j++){
    inserted.chosen(lowerCase[j]);
  }





}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
