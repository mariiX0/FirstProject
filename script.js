let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function setOperator(op) {
  // Add operator to display as well
  if (currentInput === '') return;
  operator = op;
  previousInput = currentInput;
  currentInput += op;
  document.getElementById('display').value = currentInput;
}

function calculate() {
  try {
    // Use eval safely for simple calculator logic
    const result = eval(currentInput);
    document.getElementById('display').value = result;
    currentInput = result.toString();
    operator = '';
    previousInput = '';
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  document.getElementById('display').value = '';
}
