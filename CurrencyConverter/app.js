const BaseURL = "https://api.frankfurter.dev/v2";

let dropdown = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
let fromCurrency = document.querySelector("#fromCurrency");
let toCurrency = document.querySelector("#toCurrency");
let msg = document.querySelector(".msg");
let hide = document.querySelector(".hide");
let from = "";
let to = "";

for (let select of dropdown) {
  for (currCode in countryList) {
    let newOptions = document.createElement("option");
    newOptions.innerText = currCode;
    newOptions.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOptions.selected = "selected";
      from = "USD";
    } else if (select.name === "to" && currCode === "INR") {
      newOptions.selected = "selected";
      to = "INR";
    }
    select.append(newOptions);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

fromCurrency.addEventListener("change", (event) => {
  from = fromCurrency.value;
});

toCurrency.addEventListener("change", (event) => {
  to = toCurrency.value;
});

const updateFlag = (element) => {
  let currCode = element.value;

  let countryCode = countryList[currCode];

  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");

  img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();

  let amount = document.querySelector(".amount input");
  let amtVal = parseFloat(amount.value);

  if (amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  const currentRate = await getCurrentRate();

  const result = currentRate * amtVal;
  hide.style.display = "block";

  msg.innerText = `${amtVal} ${from} ===  ${result} ${to}`;
});

const getCurrentRate = async () => {
  const URL = `${BaseURL}/rate/${from}/${to}`;

  try {
    const res = await fetch(URL);
    const data = await res.json();

    return data.rate;
  } catch (error) {
    console.log(error);
    return 0;
  }
};
