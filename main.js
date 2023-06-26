let currentNum = "";
let previousNum = "";
let operator = "";
let string = "";
let rollingTotal = "";

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

numberButtons.forEach(btn => {
    btn.addEventListener("click", e => {
        handleNumber(e.target.textContent);
    })
})

// Function that will update the display
// textContent will return a string

// function handleNumber(number) {
//     if (currentNum.length <= 11) {
//         currentNum += number;
//         currentDisplayNumber.textContent = currentNum;
//     }
    
// }

function handleNumber(number) {
    if (currentNum.length <= 11) {
        currentNum += number;
        console.log(currentNum + " current num - handle number")
        currentDisplayNumber.textContent = currentNum;
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
    if (previousNum !="" && currentNum !="") {
        calculateRolling();
    } else {
        previousNum = currentNum;
        previousDisplayNumber.textContent = previousNum + " " + operator;
        currentNum = "";
        currentDisplayNumber.textContent = 0;
    }
}

function calculateRolling() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    rollingTotal = Number(rollingTotal);
    rollingTotal = previousNum + currentNum;
    currentNum = rollingTotal;
    console.log(rollingTotal);
}

// logic for calculating numbers

// function calculate() {
//     previousNum = Number(previousNum);
//     currentNum = Number(currentNum);

//     if (operator === "+") {
//         previousNum += currentNum;
//         console.log(previousNum +"bb");
//         console.log(typeof(previousNum));
//     } else if (operator === "-") {
//         previousNum -= currentNum;
//     } else if (operator === "x") {
//         previousNum *= currentNum;
//     } else if (operator === "/") {
//         previousNum /= currentNum;
//         string = previousNum.toString();
//         console.log(typeof(previousNum));
//         console.log(previousNum);
//         console.log(string);
//         console.log(typeof(string));
//         if (Number.isNaN(previousNum)) {
//             previousNum = "UNDEFINED";
//             console.log(previousNum + " previous number from calculate");
//         } else if (!isFinite(previousNum)) {
//             previousNum = "ERROR";
//             console.log(previousNum + " previous number from calculate");
//         } else if (string.length >= 11) {
//             currentDisplayNumber.textContent = string.slice(0,11) + "...";
//             previousDisplayNumber.textContent = "--";
//             previousNum = "";
//             currentNum = "";
//             operator = "";
//             return;
//         }
            
//     }
        
//     previousDisplayNumber.textContent = "--";
//     currentDisplayNumber.textContent = previousNum;
//     storedNum = previousNum;
//     storedOperator = operator;
//     console.log("stored operator " + storedOperator);
//     console.log("stored num " + storedNum);
//     previousNum = "";
//     currentNum = "";
//     operator = "";
     
// }

// MESS WITH THIS ONE

function calculate() {
    if (storedNum != "") {
        previousNum = storedNum;
        console.log("previous num" + previousNum);
    }
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        previousNum += currentNum;
    } else if (operator === "-") {
        previousNum -= currentNum;
    } else if (operator === "x") {
        previousNum *= currentNum;
    } else if (operator === "/") {
        previousNum /= currentNum;
        string = previousNum.toString();
        if (Number.isNaN(previousNum)) {
            previousNum = "UNDEFINED";
        } else if (!isFinite(previousNum)) {
            previousNum = "ERROR";
        } else if (string.length >= 11) {
            currentDisplayNumber.textContent = string.slice(0,11) + "...";
            previousDisplayNumber.textContent = "--";
            previousNum = "";
            currentNum = "";
            operator = "";
            return;
        }
            
    }
        
    previousDisplayNumber.textContent = "--";
    currentDisplayNumber.textContent = previousNum;
    console.log("previous num" + previousNum);
    console.log("current num" + currentNum);
    previousNum = "";
    currentNum = "";
    operator = "";
     
}

// function multiply() {
//     previousNum /= currentNum;
//     string = previousNum.toString();
//     if (Number.isNaN(previousNum)) {
//         previousNum = "UNDEFINED";
//         // currentNum = "";
//         // operator = "";
//         console.log(previousNum + " previous number from calculate");
//     } else if (!isFinite(previousNum)) {
//         previousNum = "ERROR";
//         // currentNum = "";
//         // operator = "";
//         console.log(previousNum + " previous number from calculate");
//     } else if (string.length >= 11){
//         previousNum = string.slice(0,11) + "...";
//         console.log(previousNum);
//     }
//     previousDisplayNumber.textContent = "--";
//     currentDisplayNumber.textContent = previousNum;
//     previousNum = "";
//     currentNum = "";
//     operator = "";
// }


function clearDisplay() {
    previousNum = "";
    currentNum = "";
    operator = "";
    rollingTotal = "";
    currentDisplayNumber.textContent = "--";
    previousDisplayNumber.textContent = "--";

}

function decimalNumber() {
    if(!currentNum.includes(".")) {
        currentNum += ".";
        currentDisplayNumber.textContent = currentNum;
    }
}

function keyPressHandler(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <=9) {
        DisplayUpdater(e.key)
    } else if (e.key === "Enter" || e.key === "=" && currentNum != "" && previousNum != "") {
        calculate();
    } else if (e.code === "Equal" && e.shiftKey) {
        handleOperator("+");
    } else if (e.key === "-") {
        handleOperator("-");
    } else if (e.key === "/") {
        handleOperator("/");
    } else if (e.key === "*" || e.key === "x") {
        handleOperator("x");
    } else if (e.key === ".") {
        decimalNumber();
    } else if (e.key === "Backspace" || e.key === "Escape") {
        clearDisplay();
    }
}