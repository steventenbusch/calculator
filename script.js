const display = document.querySelector(".display");
const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const divideButton = document.querySelector("#divide-button");
const multiplyButton = document.querySelector("#multiply-button");
const equalsButton = document.querySelector("#equals-button");
const clearButton = document.querySelector("#clear-button");

let storedValue = null;
let selectedOperator = null;

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

function storeAdditionValue() {
  storedValue = Number(display.value);
  selectedOperator = "add";
  display.value = "";
}

function storeSubtractionValue() {
  storedValue = Number(display.value);
  selectedOperator = "subtract";
  display.value = "";
}

function storeDivisionValue() {
  storedValue = Number(display.value);
  selectedOperator = "divide";
  display.value = "";
}

function storeMultiplicationValue() {
  storedValue = Number(display.value);
  selectedOperator = "multiply";
  display.value = "";
}

function resolveCalculation() {
  const currentValue = Number(display.value);

  if (selectedOperator === "add") {
    display.value = add(storedValue, currentValue);
  }

  if (selectedOperator === "subtract") {
    display.value = subtract(storedValue, currentValue);
  }

  if (selectedOperator === "divide") {
    display.value = divide(storedValue, currentValue);
  }

  if (selectedOperator === "multiply") {
    display.value = multiply(storedValue, currentValue);
  }
}

function clearCalculator() {
  storedValue = null;
  selectedOperator = null;
  display.value = "";
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
}
