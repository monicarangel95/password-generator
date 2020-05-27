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


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
