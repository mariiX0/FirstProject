 let currentInput = '';
    let operator = '';
    let previousInput = '';

    function appendNumber(number) {
      currentInput += number;
      document.getElementById('display').value = currentInput;
    }

    function setOperator(op) {
      operator = op;
      previousInput = currentInput;
      currentInput = '';
    }

    function calculate() {
      let result;
      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);

      if (isNaN(prev) || isNaN(current)) return;

      switch (operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '*':
          result = prev * current;
          break;
        case '/':
          result = prev / current;
          break;
        default:
          return;
      }

      document.getElementById('display').value = result;
      currentInput = result.toString();
      operator = '';
    }

    function clearDisplay() {
      currentInput = '';
      previousInput = '';
      operator = '';
      document.getElementById('display').value = '';
    }
