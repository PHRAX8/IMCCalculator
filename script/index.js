import { imcButtonEvent, restartCalculatorEvent } from './events.js';
console.log("index.js");

document.getElementById("imc-button").addEventListener("click",imcButtonEvent);
document.getElementById("restart-Button").addEventListener("click",restartCalculatorEvent);