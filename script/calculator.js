import {showResult, showError, changeResultPopup} from './popups.js';

let weight, height, imc;

export let imcResult;

export const imcCalculator = () => {
  weight = document.querySelector('input[id="weight"]').value;
  height = document.querySelector('input[id="height"]').value;
  return imc = (weight/Math.pow(height, 2)).toFixed(2);  
}

export const calculateIMC = () => {
  imcResult = imcCalculator();
  if(isNaN(imcResult)){
    showError();
    setTimeout(showError, 5000);
  }else{
    changeResultPopup(imcResult);
    showResult();
  }
}
