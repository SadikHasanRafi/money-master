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

calcBtn.addEventListener("click", function () {

    let total = parseFloat(food.value) + parseFloat(rent.value) + parseFloat(cloth.value);
    totalExpenses.innerText = total;
    balance.innerText = parseFloat(income.value) - total;


});

saveBtn.addEventListener("click", function () {

    saveAmount.innerText = parseFloat(income.value) / 100 * parseFloat(savingsInput.value);
    remainingBalance.innerText = parseFloat(balance.innerText) - saveAmount.innerText;

});