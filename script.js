const display = document.querySelector(".display");
const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
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

function resolveCalculation() {
  const currentValue = Number(display.value);

  if (selectedOperator === "add") {
    display.value = add(storedValue, currentValue);
  }

  if (selectedOperator === "subtract") {
    display.value = subtract(storedValue, currentValue);
  }
}

function clearCalculator() {
  storedValue = null;
  selectedOperator = null;
  display.value = "";
}

if (display && addButton && subtractButton && equalsButton && clearButton) {
  addButton.addEventListener("click", storeAdditionValue);
  subtractButton.addEventListener("click", storeSubtractionValue);
  equalsButton.addEventListener("click", resolveCalculation);
  clearButton.addEventListener("click", clearCalculator);
}
