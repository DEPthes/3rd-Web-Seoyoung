let currentValue = "0";
let previousValue = null;
let operator = null;
let resetDisplay = false;

function updateDisplay() {
  document.getElementById("display").innerText = currentValue;
}

function inputNumber(number) {
  if (currentValue === "0" || resetDisplay) {
    currentValue = number;
    resetDisplay = false;
  } else {
    currentValue += number;
  }
  updateDisplay();
}

function inputDecimal() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
  }
  updateDisplay();
}

function inputOperator(op) {
  if (!resetDisplay && previousValue != null && operator) {
    currentValue = String(operate(previousValue, currentValue, operator));
  }
  previousValue = currentValue;
  operator = op;
  resetDisplay = true;
}

function calculate() {
  if (previousValue != null && operator && !resetDisplay) {
    currentValue = String(operate(previousValue, currentValue, operator));
    previousValue = null;
    operator = null;
  }
  resetDisplay = true;
  updateDisplay();
}

function plusMinus() {
  if (currentValue.startsWith("-")) {
    currentValue = currentValue.substring(1);
  } else {
    currentValue = "-" + currentValue;
  }
  updateDisplay();
}

function percent() {
  currentValue = String(parseFloat(currentValue) / 100);
  updateDisplay();
}

function operate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Error";
    default:
      return b;
  }
}

function clearDisplay() {
  currentValue = "0";
  previousValue = null;
  operator = null;
  resetDisplay = false;
  updateDisplay();
}

updateDisplay();
