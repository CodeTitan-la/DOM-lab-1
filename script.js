
let grandTotal = document.querySelector("h2");


const limeCola = document.getElementsByClassName("LC")[0];
limeCola.addEventListener("click", e => {
    grandTotal.innerText = "Total: 2.00";
});

const saltedPeanuts = document.getElementsByClassName("SP")[0];
saltedPeanuts.addEventListener("click", e => {
    grandTotal.innerText = "Total: $3.00";
});

const chocolateBar = document.getElementsByClassName("CB")[0];
chocolateBar.addEventListener("click", e => {
    grandTotal.innerText = "Total: $4.00";
});

const fruitGummies = document.getElementsByClassName("FG")[0];
fruitGummies.addEventListener("click", e => {
    grandTotal.innerText = "Total: $6.00";
});

