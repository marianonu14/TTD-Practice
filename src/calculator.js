const isValidArguments = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return false;
    } else {
      return true;
    }
  };
  
  const add = (x, y) => {
    if (isValidArguments(x, y)) {
      return x + y;
    }
    return 'Arguments contain a non-number';
  };
  
  const subtract = (x, y) => {
    if (isValidArguments(x, y)) {
      return x - y;
    }
    return 'Arguments contain a non-number';
  };
  
  const divide = (x, y) => {
    if (isValidArguments(x, y) && y !== 0) {
      return x / y;
    }
    return 'Arguments contain a non-number';
  };
  
  const multiply = (x, y) => {
    if (isValidArguments(x, y)) {
      return x * y;
    }
    return 'Arguments contain a non-number';
  };
  
  const calculator = {
    add,
    subtract,
    divide,
    multiply,
  };  

module.exports = calculator;