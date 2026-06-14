const display = document.querySelector(".display");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("#equals-button");
const clearButton = document.querySelector("#clear-button");

let storedValue = null;
let selectedOperator = null;

function focusDisplay() {
  if (display) {
    display.focus();
  }
}

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

const operations = {
  "+": add,
  "-": subtract,
  "/": divide,
  "*": multiply,
};

function getDisplayValue() {
  return Number(display.value);
}

function calculate(operator, firstNumber, secondNumber) {
  if (!operations[operator]) {
    throw new Error(`Unknown operator: ${operator}`);
  }

  return operations[operator](firstNumber, secondNumber);
}

function hasPendingCalculation() {
  if (storedValue !== null && selectedOperator !== null && display.value !== "") {
    return true;
  }

  return false;
}

function chooseOperator(operator) {
  if (hasPendingCalculation()) {
    display.value = calculate(selectedOperator, storedValue, getDisplayValue());
  }

  storedValue = getDisplayValue();
  selectedOperator = operator;
  display.select();
  focusDisplay();
}

function calculateSequence(expression) {
  const tokens = expression.trim().split(/\s+/);
  let result = Number(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    result = calculate(tokens[i], result, Number(tokens[i + 1]));
  }

  return result;
}

function resolveCalculation() {
  if (hasPendingCalculation()) {
    display.value = calculate(selectedOperator, storedValue, getDisplayValue());
    storedValue = null;
    selectedOperator = null;
    display.select();
  }

  focusDisplay();
}

function clearCalculator() {
  storedValue = null;
  selectedOperator = null;
  display.value = "";
  focusDisplay();
}

if (display && equalsButton && clearButton) {
  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => chooseOperator(button.dataset.operator));
  });

  equalsButton.addEventListener("click", resolveCalculation);
  clearButton.addEventListener("click", clearCalculator);
  focusDisplay();
}
