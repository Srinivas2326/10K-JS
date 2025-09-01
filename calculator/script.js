const display = document.getElementById("display");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const backspaceBtn = document.querySelector(".backspace");

let firstNum = "";
let scndNum = "";
let operator = "";
let justEvaluated = false;


numberBtn.forEach(button => {
  button.addEventListener("click", () => {
    if (justEvaluated) {
      display.value = "";
      justEvaluated = false;
    }
    display.value += button.textContent;
  });
});


operatorBtn.forEach(button => {
  button.addEventListener("click", () => {
    if (display.value === "") return;

    if (operator !== "" && !justEvaluated) {
      scndNum = display.value.split(operator)[1];
      display.value = calculate(firstNum, operator, scndNum);
    }

    firstNum = display.value;
    operator = button.textContent;
    display.value += operator;
    justEvaluated = false;
  });
});


equalBtn.addEventListener("click", () => {
  if (operator === "") return;
  scndNum = display.value.split(operator)[1];
  display.value = calculate(firstNum, operator, scndNum);
  operator = "";
  justEvaluated = true;
});


clearBtn.addEventListener("click", () => {
  display.value = "";
  firstNum = "";
  scndNum = "";
  operator = "";
});


backspaceBtn.addEventListener("click", () => {
  if (display.value.length > 0) {
    display.value = display.value.slice(0, -1);
  }
});


function calculate(num1, op, num2) {
  let a = parseFloat(num1);
  let b = parseFloat(num2);
  if (isNaN(a) || isNaN(b)) return "";

  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Error";
    default: return "";
  }
}
