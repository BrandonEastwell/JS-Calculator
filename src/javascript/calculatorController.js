//GLOBAL VAR
let firstNum;
let secondNum;
let operator;

//HTML DOM Elements
const calcScreen = document.querySelector("#screen-text");
let calcBtns = document.querySelector('#input-container');

calcBtns.addEventListener('click', (event) => {
    let target = event.target;
    if (target.className.includes("btn")) {
        calcScreen.textContent += target.textContent; //updates calculator screen
        updateCalc();
    }
});

const isEmpty = value => value === "";

function updateCalc() {
    //if the first number variable is empty find the first value
    //ignore operators
    //once found the first value find the first operator between the values
    //find the second number if the second number variable is empty
    //once all variables contain values call operate function and parse all values
    //if CLEAR input is called empty all values and current text content of screen
    const arrInput = calcScreen.textContent.split("");
    arrInput.forEach((value) => {
        if (isEmpty(firstNum)) {

        }
    })
}

function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case 'x':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
    }
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
