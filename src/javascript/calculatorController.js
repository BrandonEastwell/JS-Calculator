//GLOBAL VAR
let lastInput = "";
let lastResult = false;

//HTML DOM Elements
const calcExpression = document.querySelector("#screen-text");
let calcBtns = document.querySelector('#input-container');

calcBtns.addEventListener('click', (event) => {
    let button = event.target;
    if (button.className.includes("btn")) {
        if (button.className === 'btn-operator') {
            if (button.textContent === 'C') {
                calcExpression.textContent = '';
                lastInput = button.textContent;
            } else if (button.textContent === '=') {
                calcExpression.textContent = evaluate();
                lastResult = true;
            } else if (isEmpty(lastInput)) {
                calcExpression.textContent += '0' + button.textContent;
                lastInput = button.textContent;
            } else if (isNaN(Number(lastInput)) && !lastResult) {
                calcExpression.textContent = calcExpression.textContent.slice(0, calcExpression.textContent.length-1);
                calcExpression.textContent += button.textContent;
                lastInput = button.textContent;
            } else {
                calcExpression.textContent += button.textContent;
                lastInput = button.textContent;
                lastResult = false;
            }
        } else {
            if (lastResult) {
                calcExpression.textContent = button.textContent;
                lastResult = false;
            } else {
                calcExpression.textContent += button.textContent; //updates calculator screen
            }
            lastInput = button.textContent;
        }
    }
});

const isEmpty = value => value === "";

function evaluate() {
    let stack = [];
    const tokens = calcExpression.textContent.split(/([+\-x\/])/);
    tokens.forEach((token) => {
        stack.push(token);
        if (stack.length === 3) {
            stack.reverse().push(operate(stack.pop(), stack.pop(),stack.pop().toString()));
        }
    });
    return stack.join("");
}

function operate(firstNum, operator, secondNum) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
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
