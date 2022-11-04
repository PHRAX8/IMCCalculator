import {imcResult} from './calculator.js';

let popupResultSpan, messagePopupBackground, messagePopup, warningAlert;

popupResultSpan = document.querySelector(".message-popup span");
messagePopupBackground = document.querySelector(".filter");
messagePopup = document.querySelector(".message-popup");
warningAlert = document.querySelector(".warning-alert");

export const showResult = () => {
  messagePopupBackground.classList.toggle('hide');
  messagePopup.classList.toggle('hide');
}

export const showError = () => {
  warningAlert.classList.toggle('hide');
}

export const changeResultPopup = imcResult => {
  popupResultSpan.innerText = `Seu IMC é de ${imcResult}`;
}
