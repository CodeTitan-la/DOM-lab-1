// part 1


let grandTotal = document.getElementById("total");
superGrandTotal = 0;
const limeCola = document.getElementsByClassName("LC")[0];
limeCola.addEventListener("click", e => {
    superGrandTotal +=  parseFloat("2.00");
    grandTotal.innerText = superGrandTotal.toFixed(2);
});

const saltedPeanuts = document.getElementsByClassName("SP")[0];
saltedPeanuts.addEventListener("click", e => {
    superGrandTotal += parseFloat("3.00");
    grandTotal.innerText = superGrandTotal.toFixed(2);
});

const chocolateBar = document.getElementsByClassName("CB")[0];
chocolateBar.addEventListener("click", e => {
    superGrandTotal += parseFloat("4.00");
    grandTotal.innerText = superGrandTotal.toFixed(2);
});

const fruitGummies = document.getElementsByClassName("FG")[0];
fruitGummies.addEventListener("click", e => {
    superGrandTotal += parseFloat("6.00");
    grandTotal.innerText = superGrandTotal.toFixed(2);
});


let coins  = document.getElementById("number-input");

let typeOfCoin = document.getElementById("coin-select");

let submission = document.getElementById("theForm");

let coinContainer = document.getElementById("coin-container");

submission.addEventListener("submit", e => {
    e.preventDefault();
   let numCoins = coins.value;
   let coinType = typeOfCoin.value;
   for(let i = 0; i < numCoins; i++ ){
       const newCoin = document.createElement("div");
       newCoin.classList.add("coin", coinType);
       

       newCoin.addEventListener("click", e => {
           newCoin.remove();
       });
       submission.append(newCoin);
    };
    
});



//Use the createEelemnt in JavaScript. Then in JavaScript when the "show me the sheckles" button is clicked, change the display to display: inline-block.


//part 3

const lightBulb = document.getElementById("light-bulb")

let lightOn = document.getElementById("on");
lightOn.addEventListener("click", e => {
    lightBulb.style.backgroundColor = ("yellow");
})

let lightOff = document.getElementById("off");
lightOff.addEventListener("click", e => {
    lightBulb.style.backgroundColor = ("gray");
})

let lightToggle = document.getElementById("toggle");
lightToggle.addEventListener("click", e => {
    if(lightBulb.style.backgroundColor === "yellow"){
        lightBulb.style.backgroundColor = ("gray");
    }
    else if (lightBulb.style.backgroundColor === "gray"){
        lightBulb.style.backgroundColor = ("yellow");
    }
})

let endExample = document.getElementById("end");
endExample.addEventListener("click", e => {
    lightBulb.remove();
    lightOn.disabled = true;
    lightOff.disabled = true;
    lightToggle.disabled = true;
    endExample.disabled = true;
})
