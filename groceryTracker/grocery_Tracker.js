let amountOne;
let amountTwo;
let amountThree

function groceryTracker() {
    amountOne = parseFloat(document.getElementById('amountOne').value);
    amountTwo = parseFloat(document.getElementById('amountTwo').value);
    amountThree = parseFloat(document.getElementById('amountThree').value);


    let sum = amountOne + amountTwo + amountThree;
    document.getElementById('result').innerText = `The total amount is is: ${sum}`;
}