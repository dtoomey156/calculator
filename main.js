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
const plusMinus = document.querySelector(".plus-minus");
const percent = document.querySelector(".percent-button");

// Added validation to event listener so that the calculate fucntion only fires if there is a current num and previous num

equal.addEventListener("click", () => {
    if(currentNum != "" && previousNum !="")
    calculate();
});

clear.addEventListener("click", clearDisplay);

decimal.addEventListener("click", decimalNumber);

plusMinus.addEventListener("click", plusOrMinus);

percent.addEventListener("click", calcPercent);

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
    if (previousNum !="" && operator =="") {
        previousNum = "";
        currentNum += number;
    } else if (currentNum.length <= 11) {
        currentNum += number;
        console.log(currentNum + " current num");
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
    console.log(operator);
    if (previousNum !="" && currentNum !="" || previousNum !="") {
        calculateRolling();
    } else {
        previousNum = currentNum;
        console.log(previousNum + " previous num - handle operator");
        previousDisplayNumber.textContent = previousNum + " " + operator;
        currentNum = "";
        currentDisplayNumber.textContent = 0;
    }

}


// function calculateRolling() {
//     previousNum = Number(previousNum);
//     currentNum = Number(currentNum);
//     rollingTotal = Number(rollingTotal);
//     rollingTotal = previousNum + currentNum;
//     previousNum = rollingTotal;
//     currentNum = "";
//     // console logs
//     console.log(currentNum + "current num - calculateRolling");
//     console.log(previousNum + "previous num -calculate Rolling");
//     console.log(rollingTotal + "rolling total - calculateRolling");
   
// }

// MESS WITH THIS ONE AND DELETE IF NEED BE

function calculateRolling() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    rollingTotal = Number(rollingTotal);

    if (operator === "+") {
        rollingTotal = previousNum + currentNum;
        previousNum = rollingTotal;
        currentNum = "";
    } else if (operator === "-") {
        rollingTotal = previousNum - currentNum;
        previousNum = rollingTotal;
        currentNum = "";
    } else if (operator === "x") {
        rollingTotal = previousNum * currentNum;
        previousNum = rollingTotal;
        currentNum = "";
    } else if (operator === "/"){
        rollingTotal = previousNum / currentNum;
        previousNum = rollingTotal;
        currentNum = "";
    }
    // rollingTotal = previousNum + currentNum;
    // previousNum = rollingTotal;
    // currentNum = "";
    // console logs
    console.log(currentNum + "current num - calculateRolling");
    console.log(previousNum + "previous num -calculate Rolling");
    console.log(rollingTotal + "rolling total - calculateRolling");
   
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
//     console.log("rolling total " + rollingTotal);
//     console.log("stored operator " + storedOperator);
//     console.log("stored num " + storedNum);
//     previousNum = "";
//     currentNum = "";
//     operator = "";
     
// }

// Mess with this one

function calculate() {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === "+") {
        previousNum += currentNum;
        console.log(typeof(previousNum));
    } else if (operator === "-") {
        previousNum -= currentNum;
    } else if (operator === "x") {
        previousNum *= currentNum;
    } else if (operator === "/") {
        previousNum /= currentNum;
        string = previousNum.toString();
        console.log(typeof(previousNum));
        console.log(previousNum);
        console.log(string);
        console.log(typeof(string));
        if (Number.isNaN(previousNum)) {
            previousNum = "UNDEFINED";
            console.log(previousNum + " previous number from calculate");
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
    
    // rollingTotal = Number(rollingTotal);
    // rollingTotal = previousNum;
    // previousNum = rollingTotal;
    currentNum = "";
    console.log(previousNum + " previous num - calculate");
    operator = "";
     
}

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

function plusOrMinus() {
    if (!currentNum.includes("-")) {
        currentNum = "-" + currentNum;
        console.log(currentNum);
        currentDisplayNumber.textContent = currentNum;
    } else if (currentNum.includes("-")) {
        currentNum = currentNum.replace("-", "");
        console.log(currentNum);
        currentDisplayNumber.textContent = currentNum;
    }
}

function calcPercent() {
    if (previousNum != "" && operator == "") {
        previousNum /= 100;
        // previousNum = parseFloat(previousNum);
        console.log(previousNum + "percent");
        currentDisplayNumber.textContent = previousNum;
    } else if (previousNum != "" && operator == "x" && currentNum != "") {
        currentNum /=100;
    } else if (currentNum != "" && previousNum == ""){
        currentNum /= 100;
        console.log(currentNum);
        console.log(typeof(currentNum));
        currentDisplayNumber.textContent = currentNum;
    }
}


function keyPressHandler(e) {
    e.preventDefault();
    if (e.key >= 0 && e.key <=9) {
        handleNumber(e.key)
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
    } else if (e.key === "Alt" && e.shiftKey && e.key === "=") {

    }
}