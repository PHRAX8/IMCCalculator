import {showResult} from './popups.js';
import {calculateIMC} from './calculator.js';

export const restartCalculatorEvent = () => {
  showResult();
  document.querySelector('input[id="weight"]').value = "";
  document.querySelector('input[id="height"]').value = "";
}

export const imcButtonEvent = () => {
  calculateIMC();
}
