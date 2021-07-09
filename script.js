const curr1 = document.getElementById("currency-one");
const curr2 = document.getElementById("currency-two");
const amt1 = document.getElementById("amount-one");
const amt2 = document.getElementById("amount-two");

const swap = document.getElementById("swap");

amt1.focus();                                                     
//fetch and update dom
function calc () {                                                      //calculates the output value
const currency1 = curr1.value;
const currency2 = curr2.value;
fetch(` https://v6.exchangerate-api.com/v6/4e10ee2ecd48943030195476/latest/${currency1}`)
 .then( function (res) {
     return res.json();
 })
 .then(function (data) {
    let rate = data.conversion_rates[currency2];
    amt2.value = (amt1.value * rate).toFixed(4);
 });
}
curr1.addEventListener("change", calc);
amt1.addEventListener("input", calc);
curr2.addEventListener("change", calc);
amt2.addEventListener("input", calc);
calc();

swap.addEventListener("click", ()=> {
    const temp = curr1.value;
    curr1.value = curr2.value;
    curr2.value = temp;

    calc();
})