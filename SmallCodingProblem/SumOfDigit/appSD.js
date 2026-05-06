let numberUser = document.getElementById("numberUser");
let sumOfNumber = document.getElementById("sumNumber");

let number = prompt("Enter a number");

numberUser.innerText = number;
let total = 0


while(number>0){
    total = number% 10 + total
    number = parseInt(number/10 ) 
}

sumOfNumber.innerHTML = total;
