var btnBillAmount = document.querySelector("#btn-bill");
var inputBillAmount = document.querySelector("#input-bill");
var inputCash = document.querySelector("#input-cash");
var btnCashGiven = document.querySelector("#btn-calculate");
var notesOutput = document.querySelectorAll(".notes");

const totalNotes = [2000, 500, 100, 50, 20, 10, 5, 1];


function clickEventHandler(){
    var billAmount = inputBillAmount.value;
        
    if(billAmount <= 0){
        console.log("enter valid amount");
    }
}

function calculateEventHandler(){
    var billAmount = inputBillAmount.value;
    var cashGiven = inputCash.value;
    numberOfNotes(billAmount, cashGiven);
    
}

function numberOfNotes(bill, cash){
    var cashToBeGiven = cash - bill;
    
    if(bill>cash){
        console.log("Cash given must be greater than the bill amount");
    }

    for(var i=0; i<totalNotes.length; i++){
        var numOfNotes = Math.floor(cashToBeGiven / totalNotes[i]);
        console.log(numOfNotes);
        cashToBeGiven %= totalNotes[i];        
        notesOutput[i].innerText = numOfNotes;
    }

}

btnBillAmount.addEventListener("click", clickEventHandler);
btnCashGiven.addEventListener("click", calculateEventHandler);
