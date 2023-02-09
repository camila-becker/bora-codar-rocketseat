const operationInput = document.querySelector("#operation");
const result = document.querySelector(".display-result");
const buttons = document.querySelectorAll("button");
const clearButton = document.querySelector(".clear-button");
const backspaceButton = document.querySelector(".backspace-button");

result.textContent = "0";

function start() {
  handleClick();
  handleKeyUp();
  clear();
  handleBackspace();
}

function handleClick() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value !== "=" && button.value !== "plus-minus") {
        operationInput.value += button.value;
      }
      if (button.value === "=") {
        calculate();
      }
    });
  });
}

function handleKeyUp() {
  window.addEventListener("keyup", (event) => {
    buttons.forEach((button) => {
      if (event.key === button.value) {
        operationInput.value += event.key;
      }

      if (event.key === "=" || event.key === "Enter") {
        calculate();
      }
    });
  });
}

function clear() {
  clearButton.addEventListener("click", () => {
    clearValue();
  });

  window.addEventListener("keyup", (event) => {
    if (event.key === "Delete") {
      clearValue();
    }
  });
}

function handleBackspace() {
  backspaceButton.addEventListener("click", () => {
    backspace();
  });
  window.addEventListener("keyup", (event) => {
    if (event.key === "Backspace") {
      backspace();
    }
  });
}

function calculate() {
  result.textContent = eval(operationInput.value);
}

function clearValue() {
  operationInput.value = "";
  result.textContent = "0";
}

function backspace() {
  operationInput.value = operationInput.value.slice(0, -1);
  result.textContent = "0";
}

start();
