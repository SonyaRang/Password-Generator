/* number-array */
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
/* upercase-array */
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
/* lowercase-array */
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
/* special-array */
var specialCharacters = ['!', '@', '"', '#', '$', '%', '&', '"', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '[', '\ ', ']', '^', '_', '`', '{', '}', '~'];

function getPasswordOptions() {
  var passLength = parseInt(prompt("Password lenght? 8 to 128 characters"));
  if (isNaN(passLength) === true) {
    alert("Must be a number!");
    return getPasswordOptions();
  }
  if (passLength < 8 || passLength > 128) {
    alert("Must be at least 8 characters, and less than 128");
    return getPasswordOptions();
  }

/* questions */
  var hasNumericChar = confirm("Do you want to use numeric characters?");

  var hasSpecialChar = confirm("Do you want to use special characters?");

  var hasLowerChar = confirm("Do you want to use lower case letters?");

  var hasUpperChar = confirm("Do you want to use upper case letters?");

  if (
    hasNumericChar === false &&

    hasSpecialChar === false &&

    hasLowerChar === false &&
    
    hasUpperChar === false
    ) 
  {
    alert('Must select at least one character type');
    return getPasswordOptions();
  }

 /* functions */ 
  var passwordOptions = {
    passLength: passLength,
    hasSpecialChar: hasSpecialChar,
    hasNumericChar: hasNumericChar,
    hasLowerChar: hasLowerChar,
    hasUpperChar: hasUpperChar
  };
    return passwordOptions;
  };

  function getRandomArrayEl(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randEl = arr[randIndex];
  return randEl;
};

  function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleChars = [];
  var guaranteedChar = [];
  if (options.hasSpecialChar) {
    possibleChars = possibleChars.concat(specialCharacters);
    guaranteedChar.push(getRandomArrayEl(specialCharacters));
  }
  if (options.hasNumericChar) {
    possibleChars = possibleChars.concat(numericCharacters);
    guaranteedChar.push(getRandomArrayEl(numericCharacters));
  }
  if (options.hasLowerChar) {
    possibleChars = possibleChars.concat(lowerCasedCharacters);
    guaranteedChar.push(getRandomArrayEl(lowerCasedCharacters));
  }
  if (options.hasUpperChar) {
    possibleChars = possibleChars.concat(upperCasedCharacters);
    guaranteedChar.push(getRandomArrayEl(upperCasedCharacters));

  for (var i = 0; i < guaranteedChar.length; i++) {
    result[i] = guaranteedChar[i];
  } 
  }
for (var i = 0; i < options.passLength; i++) {
  var possibleChar = getRandomArrayEl(possibleChars);
  result.push(possibleChar);
  }

return result.join('');
};

/* refrences */
var generateBtn = document.querySelector("#generate");

/* written pass */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);