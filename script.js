// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var generatePassword = "";

  var numberCharacter = "1234567890";
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var specialChar = "!@#$%^&*()_+{}|<>?:;~";
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var requiredCharString = "";

  var lengthOfPassword = prompt(
    "How many characters would you like to include in your password Choose between 8 and 128"
  );

  // while (lengthOfPassword < 8 || lengthOfPassword > 128) {
  //   var lengthOfPassword = prompt(
  //     "choose a length of at least 8 characters and no more than 128 characters"
  //   );
  // }
  console.log("password length" + lengthOfPassword);

  var numberCharacter = confirm("Are we including numbers in your password?");

  if (numberCharacter) {
    requiredCharString = requiredCharString.concat(numberCharacter);
  }

  var lowerCase = confirm(
    "would you like lowercase characters in your password?"
  );

  if (lowerCase) {
    requiredCharString = requiredCharString.concat(lowerCaseChar);
  }

  var upperCase = confirm(
    "would you like uppercase characters in your password?"
  );

  if (upperCase) {
    requiredCharString = requiredCharString.concat(upperCaseChar);
  }

  var special = confirm("would you like special characters in your password?");

  if (special) {
    requiredCharString = requiredCharString.concat(specialChar);
  }

  for (i = 0; i < lengthOfPassword; i++) {
    var random = Math.floor(Math.random() * requiredCharString.length);

    generatePassword = generatePassword.concat(
      requiredCharString.charAt(random)
    );
    console.log("Generate password is: " + generatePassword);
  }

  return generatePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
