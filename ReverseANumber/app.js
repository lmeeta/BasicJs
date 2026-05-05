let numberUser = document.getElementById("numberUser");
let reverseNumber = document.getElementById("reverseNumber");

let number = prompt("Enter a number");
// console.log(number);

numberUser.innerText = number;

let reverse = number.split("").reverse().join("");
// console.log(reverse);
reverseNumber.innerHTML = reverse;
