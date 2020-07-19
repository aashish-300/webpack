import "./main.css"
import "./style.css"

import { parseInputs } from './parseInput'
import { inputsAreValid } from './input'
import { handleAdditionError } from './handleAdditionalError'

const numberOneInput =  document.getElementById("numberOne");
const numberTwoInput = document.getElementById("numberTwo");
const addValuesButton = document.getElementById("addValues");
const resultDiv = document.getElementById("result");
const errorBox = document.getElementById("error");


const hideErrors = () => {
  errorBox.classList.add("invisible");
};

hideErrors();
addValuesButton.addEventListener("click", () => {
  hideErrors();
  const inputs = [numberOneInput.value, numberTwoInput.value];
  const parsedInputs = parseInputs(...inputs);
  if (inputsAreValid(...parsedInputs)) {
    const [numA, numB] = parsedInputs;
    resultDiv.innerText = numA + numB;
  } else {
    resultDiv.innerText = "";
    handleAdditionError(inputs, parsedInputs);
  }
});
console.log('hello');