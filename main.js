let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".current-num");
const previousDisplayNumber = document.querySelector(".previous-num");

const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const clear = document.querySelector(".clear");
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

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
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
}