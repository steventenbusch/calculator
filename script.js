const display = document.querySelector(".display");
const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const divideButton = document.querySelector("#divide-button");
const multiplyButton = document.querySelector("#multiply-button");
const equalsButton = document.querySelector("#equals-button");
const clearButton = document.querySelector("#clear-button");

let storedValue = null;
let selectedOperator = null;

function focusDisplay() {
  display.focus();
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

function calculateCurrentOperation(currentValue) {
  if (selectedOperator === "add") {
    return add(storedValue, currentValue);
  }

  if (selectedOperator === "subtract") {
    return subtract(storedValue, currentValue);
  }

  if (selectedOperator === "divide") {
    return divide(storedValue, currentValue);
  }

  if (selectedOperator === "multiply") {
    return multiply(storedValue, currentValue);
  }
}

function storeOperator(operator) {
  if (storedValue !== null && selectedOperator !== null && display.value !== "") {
    display.value = calculateCurrentOperation(Number(display.value));
  }

  storedValue = Number(display.value);
  selectedOperator = operator;
  display.select();
  focusDisplay();
}

function storeAdditionValue() {
  storeOperator("add");
}

function storeSubtractionValue() {
  storeOperator("subtract");
}

function storeDivisionValue() {
  storeOperator("divide");
}

function storeMultiplicationValue() {
  storeOperator("multiply");
}

function resolveCalculation() {
  if (selectedOperator !== null) {
    display.value = calculateCurrentOperation(Number(display.value));
  }

  focusDisplay();
}

function clearCalculator() {
  storedValue = null;
  selectedOperator = null;
  display.value = "";
  focusDisplay();
}

if (
  display &&
  addButton &&
  subtractButton &&
  divideButton &&
  multiplyButton &&
  equalsButton &&
  clearButton
) {
  addButton.addEventListener("click", storeAdditionValue);
  subtractButton.addEventListener("click", storeSubtractionValue);
  divideButton.addEventListener("click", storeDivisionValue);
  multiplyButton.addEventListener("click", storeMultiplicationValue);
  equalsButton.addEventListener("click", resolveCalculation);
  clearButton.addEventListener("click", clearCalculator);
  focusDisplay();
}
