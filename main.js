let currentNum = "";
let previousNum = "";
let operator = "";
let point = "";

const currentDisplayNumber = document.querySelector(".current-num");
const previousDisplayNumber = document.querySelector(".previous-num");

const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

// Added validation to event listener so that the calculate fucntion only fires if there is a current num and previous num

equal.addEventListener("click", () => {
    if(currentNum != "" && previousNum !="")
    calculate();
});

clear.addEventListener("click", clearDisplay);

decimal.addEventListener("click", decimalNumber);

window.addEventListener("keydown", keyPressHandler);

// Adds event listeners to number buttons
// Understanding this is bad practice, I'm using whacky variables to reinforce JS function to myself

numberButtons.forEach(poop => {
    poop.addEventListener("click", whatever => {
        DisplayUpdater(whatever.target.textContent);
    })
})

// Function that will update the display
// textContent will return a string

function DisplayUpdater(number) {
    console.log(number);
    if (currentNum.length <= 11) {
        currentNum += number;
        currentDisplayNumber.textContent = currentNum;
        console.log(currentNum + "current number")
    }
    
}


// Adding event listener for operators and function that sets variable for operator

operators.forEach(btn => {
    btn.addEventListener("click", e => {
        handleOperator(e.target.textContent);
    })
})

function handleOperator(op) {
    operator = op;
    previousNum = currentNum;
    previousDisplayNumber.textContent = previousNum + " " + operator;
    currentNum = "";
    currentDisplayNumber.textContent = 0;
    console.log(currentNum + "current num")
}

// logic for calculating numbers

function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        previousNum += currentNum;
    } else if (operator === "-") {
        previousNum -= currentNum;
    } else if (operator === "x") {
        previousNum *= previousNum;
    } else if (operator=== "/") {
        previousNum /= previousNum;
    }
    currentDisplayNumber.textContent = previousNum;
    previousDisplayNumber.textContent = "--";
    previousNum = "";
    currentNum = "";
}

function clearDisplay() {
    previousNum = "";
    currentNum = "";
    operator = "";
    currentDisplayNumber.textContent = "--";
    previousDisplayNumber.textContent = "--";

}

function decimalNumber() {
    if(!currentNum.includes(".")) {
        currentNum += ".";
        console.log(currentNum + "current num");
        currentDisplayNumber.textContent = currentNum;
    }
}

function keyPressHandler(e) {
    e.preventDefault();
    console.log(e)
    if (e.key >= 0 && e.key <=9) {
        DisplayUpdater(e.key)
    }
    if (e.key === "Enter" || e.key === "=" && currentNum != "" && previousNum != "") {
        calculate();
    }
    if (e.code === "Equal" && e.shiftKey) {
        handleOperator("+")
    }
    if (e.key === "-") {
        handleOperator("-");
    }
    if (e.key === "/") {
        handleOperator("/");
    }
    if (e.key === "*") {
        handleOperator("x");
    }
    if (e.key === ".") {
        decimalNumber();
    }
    if (e.key === "Backspace" || e.key === "Escape") {
        clearDisplay();
    }
}