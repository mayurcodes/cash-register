var btnBillAmount = document.querySelector("#btn-bill");
var inputBillAmount = document.querySelector("#input-bill");
var inputCash = document.querySelector("#input-cash");
var btnCashGiven = document.querySelector("#btn-calculate");
var notesOutput = document.querySelectorAll(".notes");
var output = document.querySelector("#output");

var billAmount = 0;
var cashGiven = 0;
const totalNotes = [2000, 500, 100, 50, 20, 10, 5, 1];

function clickEventHandler() {
    billAmount = Number(inputBillAmount.value);

    if (billAmount > 0) {
        document.getElementById('hide').style.display = "block"
        output.innerText = "";
    } else {
        output.innerText = "Please enter valid amount..";
    }
}

function calculateEventHandler() {
    cashGiven = Number(inputCash.value);
    var cashToBeGiven = cashGiven - billAmount;
    var i = 0;

    if (billAmount < cashGiven) {
        for ( i = 0; i < totalNotes.length; i++) {
            var numOfNotes = Math.floor(cashToBeGiven / totalNotes[i]);
            cashToBeGiven %= totalNotes[i];
            notesOutput[i].innerText = numOfNotes;
        }
        output.innerText = "";

    } else if (billAmount == cashGiven) {
        output.innerText = "That's perfect cash paid...😎";

        for ( i in totalNotes) {
            notesOutput[i].innerText = 0;
        }

    } else {
        output.innerText = "Cash given must be same or greater than the bill amount..";

        for ( i in totalNotes) {
            notesOutput[i].innerText = 0;
        }
    }

}

btnBillAmount.addEventListener("click", clickEventHandler);
btnCashGiven.addEventListener("click", calculateEventHandler);