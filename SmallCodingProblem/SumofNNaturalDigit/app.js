let submitbtn = document.getElementById("btn");
let number = document.getElementById("number");
let numberUser = document.getElementsByClassName("numberUser");
let series = document.getElementById("series");
let hide = document.getElementById("hide");

submitbtn.disabled = true;

number.addEventListener("input", () => {
  if (number.value === "") {
    submitbtn.disabled = true;
  } else {
    submitbtn.disabled = false;
  }
});

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !submitbtn.disabled) {
    submitbtn.click();
  }
});

submitbtn.addEventListener("click", () => {
  let actNumber = Number(number.value);

  for (let i = 0; i < numberUser.length; i++) {
    numberUser[i].innerHTML = actNumber;
  }

  if (actNumber <= 0) {
    series.innerHTML = `Invalid input`;
    hide.style.display = "block";
    return;
  }
  let val = 0;
  let sum = 0;

  for (let i = 0; i < actNumber; i++) {
    val = i + 1;
    sum += val;

    series.innerHTML = sum;
  }

  hide.style.display = "block";
});
