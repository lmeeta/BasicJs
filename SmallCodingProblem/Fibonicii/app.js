let submitbtn = document.getElementById("btn");
let fibNumber = document.getElementById("fibNumber");
let numberUser = document.getElementsByClassName("numberUser");
let series = document.getElementById("series");
let hide = document.getElementById("hide");

submitbtn.disabled = true;

fibNumber.addEventListener("input", () => {
  if (fibNumber.value === "") {
    submitbtn.disabled = true;
  } else {
    submitbtn.disabled = false;
  }
});

fibNumber.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
  }
});

submitbtn.addEventListener("click", () => {
  let actNumber = Number(fibNumber.value);

  for (let i = 0; i < numberUser.length; i++) {
    numberUser[i].innerHTML = actNumber;
  }

  if (actNumber <= 0) {
    series.innerHTML = `Invalid input`;
    hide.style.display = "block";
    return;
  }
  let prev = 0;
  let next = 1;
  let final = 0;
  let fibseries = [];

  for (let i = 0; i < actNumber; i++) {
    fibseries.push(prev);
    final = prev + next;
    prev = next;
    next = final;

    series.innerHTML = fibseries.join(", ");
  }

  hide.style.display = "block";
});
