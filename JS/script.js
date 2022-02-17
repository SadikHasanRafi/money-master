let income = document.getElementById('income'),
    food = document.getElementById("food"),
    rent = document.getElementById("rent"),
    cloth = document.getElementById("cloth"),
    calcBtn = document.getElementById('calcBtn'),
    totalExpenses = document.getElementById("totalExpenses"),
    balance = document.getElementById("balance"),
    savingsInput = document.getElementById("save"),
    saveBtn = document.getElementById('saveBtn'),
    saveAmount = document.getElementById("saveAmount"),
    remainingBalance = document.getElementById("RemainingBalance"),
    textFieldError = document.getElementById("textFieldError");

//Checking negetive value
function isNegativeNum(value){
    if(value < 0 ){
        alert(value, "is negative number. Type any Valid input")
    }
}
//checking String value
function isString(value){
    if(isNaN(value) == true){
        alert(value, "is string. Type any Valid input")
    }
}



calcBtn.addEventListener("click", function () {

    let total = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(cloth.value);

    // Negative Number and function recall
    isNegativeNum(parseFloat(food.value));
    isNegativeNum(parseFloat(rent.value));
    isNegativeNum(parseFloat(cloth.value)); 

    // Strings and function recall
    isString(parseFloat(food.value));
    isString(parseFloat(rent.value));
    isString(parseFloat(cloth.value));


    if(income.value < total){
        console.log("You have nothing to spend");
    } 

    totalExpenses.innerText = total;
    balance.innerText = parseFloat(income.value) - total;
    

});

saveBtn.addEventListener("click", function () {

    saveAmount.innerText = (parseFloat(income.value) / 100) * parseFloat(savingsInput.value);
    remainingBalance.innerText = parseFloat(balance.innerText) - saveAmount.innerText;

    isString(savingsInput.value);
    isNegativeNum(savingsInput.value);
    
    if(balance.innerText < saveAmount.innerText || remainingBalance.innerText < 0){
        remainingBalance.innerText = 0;
        alert("Invalid input. You are saving more than your remaining balance.");
    }

});