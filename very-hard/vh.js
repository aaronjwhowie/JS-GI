function add(val1, val2) {
  let sum = val1 + val2;
  return sum;
}
console.log(add);
function subtract(val1, val2) {
  let difference = val1 - val2;
  return difference;
}
console.log(difference);
function divide(val1, val2) {
  let qoutient = val1 / val2;
  return qoutient;
}

function multiply(val1, val2) {
  let product = val1 * val2;
  return product;
}
// ------------------

function whichOperator(operator) {
  const MULTIPLICATION = "*";
  const ADDITION = "+";
  const DIVISION = "/";
  const SUBTRACTION = "-";
  // -----------------
  if (operator == MULTIPLICATION) {
    return multiply(val1, val2);
  } else if ((operator = ADDITION)) {
    return add(val1, val2);
  } else if ((operator = DIVISION)) {
    return divide(val1, val2);
  } else if ((operator = SUBTRACTION)) {
    return subtract(val1, val2);
  }
}
// -------------------------------

let val1 = parseInt(prompt("First Number?"));
let val2 = parseInt(prompt("Second Number?"));

let operator = prompt("Operator?");
alert(val1 + operator + val2 + "=" + whichOperator(operator, val1, val2));
