// generate the random password using these characters abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789!@$?_-"


// made variables and split them into arrays for each of the parameters (upper vs lower case, symbols, numbers)

var charLowerString = "abcdefghijklmnopqrstuvwxyz"
var charUpperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberString = "1234567890"
var symbolString = "!@#$%^&*()_+?><';:]["
var allChar = ""
var arrayLower = charLowerString.split("");
var arrayUpper = charUpperString.split("");
var arrayNumber = numberString.split("");
var arraySymbol = symbolString.split("");
var arrayAll = allChar.split("");

var button = document.querySelector("#button")



// console logged these to make sure the "split" worked
// console.log(arrayLower);
// console.log(arrayUpper);
// console.log(arrayNumber);
// console.log(arraySymbol);

function generate() {
    var userLengthInput = prompt("How long would you like your password? (choose a number between 8-128)")
    userLengthInput = parseInt(userLengthInput)
    if (userLengthInput < 8 || userLengthInput > 128) {
        alert("Please select a number between 8 and 128")
    } else {
        var password = ""
        var lowerBool = confirm("Do you want lower case letters in your password?");
        var upperBool = confirm("Do you want upper case letters in your password?");
        var numberBool = confirm("Do you want numbers in your password?");
        var symbolBool = confirm("Do you want special symbols in your password?")

        if (lowerBool === true) {
            allChar = allChar + charLowerString
        }
        if (upperBool === true) {
            allChar = allChar + charUpperString
        }
        if (numberBool === true) {
            allChar = allChar + numberString
        }
        if (symbolBool === true) {
            allChar = allChar + symbolString
        }
        if (lowerBool === false && upperBool === false && numberBool === false && symbolBool === false) {
            alert("You must select at least one parameter");
            generate();
        }
        for (var i = 0; i < userLengthInput; i++) {
            password += allChar.charAt(Math.floor(Math.random() * allChar.length));
        }
        document.querySelector("#display").value = password
    }



}
button.addEventListener("click", generate)