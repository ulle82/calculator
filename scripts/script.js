let output = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.num-button');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const allClear = document.querySelector('#clear');
const comma = document.querySelector('#comma');
const bs = document.querySelector('#bs');

function updateDisplay() {
    let tempOutput = parseFloat(output);
    if (isNaN(tempOutput)) {
        display.textContent = "";
    }
    else if (output.endsWith('.')) {
        display.textContent = ((tempOutput).toLocaleString() + '.');
    }
    else {
        display.textContent = (tempOutput).toLocaleString();
    }
};

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// Need to finish operate function:

/* function operate() {

} */

numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", (e) => {
        output += e.target.textContent;
        updateDisplay();
    })
})

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", (e) => {
        firstNumber = Number(output);
        operator = e.target.dataset.operator;
        output = "";
        updateDisplay();
    });
});

equalsButton.addEventListener("click", () => {
    secondNumber = Number(output);
    let result = null;
    if (operator === '+') {
        result = add(firstNumber, secondNumber);
    }
    else if (operator === '-') {
        result = subtract(firstNumber, secondNumber);
    }
    else if (operator === '/') {
        result = divide(firstNumber, secondNumber);
    }
    else if (operator === '*') {
        result = multiply(firstNumber, secondNumber);
    }
    output = parseFloat(result.toFixed(2));
    updateDisplay();
});

allClear.addEventListener("click", () => {
    output = ""
    firstNumber = ""
    secondNumber = ""
    operator = ""
    updateDisplay();
});

comma.addEventListener("click", (e) => {
    if (output === "") {
    }
    else if  (output.includes('.')) {
    }
    else {
        output += e.target.dataset.operator;
        updateDisplay();
    }
});

bs.addEventListener("click", () => {
    if (output.length > 0) {
        output = output.slice(0, -1);
    }
    updateDisplay();
});