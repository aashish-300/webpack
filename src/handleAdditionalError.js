import {inputsAreValid} from './input'

export const handleAdditionError = (inputs, numbers) => {
  const fullMessage = inputs.reduce((message, str, index) => {
    if (inputsAreValid(numbers[index])) {
      return message + "";
    } else {
      return message + `${str} is not a number. `;
    }
  }, "Please enter two valid numbers! ");

  errorBox.classList.remove("invisible");
  errorBox.innerText = fullMessage;
};