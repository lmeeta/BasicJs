let numberUser = document.getElementById("numberUser");
let reverseNumber = document.getElementById("reverseNumber");

let number = prompt("Enter a number");

numberUser.innerText = number;

let reverse = number.split("").reverse().join("");
reverseNumber.innerHTML = reverse;
