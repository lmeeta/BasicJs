const url = "https://dummyjson.com/products";

let btn = document.querySelector("#btn");
let getFact = document.querySelector("#fact");

//async await
// const fetchFun = async () => {
//   let extractData = await fetch(url);
//   let data = await extractData.json();
//   getFact.innerHTML = data.products[0].description;
//   console.log(data.products[0].description, "text");
// };

//with Promise
function fetchFun() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      getFact.innerHTML = data.products[0].description;
    });
}

btn.addEventListener("click", fetchFun);
