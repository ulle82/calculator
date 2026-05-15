// =====================================
// Initialisation of variables
// =====================================

let output = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultDisplayed = false;


// =====================================
// DOM elements
// =====================================

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.num-button');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const allClear = document.querySelector('#clear');
const comma = document.querySelector('#comma');
const bs = document.querySelector('#bs');

function updateDisplay() {
    let tempOutput = parseFloat(output);
    checkExponential()
    if (isNaN(tempOutput)) {
        display.textContent = "";
    }
    else if (output.endsWith('.')) {
        display.textContent = ((tempOutput).toLocaleString() + '.');
    }
    else {
        let intOutput = output.split(".");
        if (intOutput[1]) {
            display.textContent = parseFloat(intOutput[0]).toLocaleString() + '.' + intOutput[1];
        }
        else {
            display.textContent = parseFloat(intOutput[0]).toLocaleString()
        }
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
    if (y === 0) {
        return 'err'
    }
    else {
        return x / y;
    }
}

numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", (e) => {
        let tempLength = output.length;
        if (resultDisplayed) {
            clearAll()
        }
        if (output.includes('.')) {
            tempLength -= 1;
        }
        if (tempLength >= 10) {
        }
        else {
            output += e.target.textContent;
        }
        updateDisplay();
    })
})

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", (e) => {
        firstNumber = Number(output);
        operator = e.target.dataset.operator;
        output = "";
        resultDisplayed = false;
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
        if (result === 'err') {
            display.textContent = "Err DIV/0";
            resultDisplayed = true;
            return;
        }
    }
    else if (operator === '*') {
        result = multiply(firstNumber, secondNumber);
    }
    output = parseFloat(result.toFixed(2)).toString();
    updateDisplay();
    resultDisplayed = true;
    firstNumber = Number(result);
});

allClear.addEventListener("click", () => {
    clearAll();
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
    if (resultDisplayed === true) {
        return;
    }
    else if (output.length > 0) {
        output = output.slice(0, -1);
    }
    updateDisplay();
});

function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
}

function checkExponential() {
    let tempLength = output.length;
    if (output.includes('.')) {
        tempLength -= 1;
    }
    if (tempLength > 10) {
        output = expo(output, 2);
    }
};

function clearAll() {
    output = ""
    firstNumber = ""
    secondNumber = ""
    operator = ""
    resultDisplayed = false;
    updateDisplay();
};