const userFirstNumber = parseInt(prompt("Por favor, introduce el primer número."));
const userSecondNumber = parseInt(prompt("Por favor, introduce el segundo número."));
let biggerNumber;
(userFirstNumber>userSecondNumber)?biggerNumber=userFirstNumber:biggerNumber=userSecondNumber;
console.log(`El mayor de los dos números es el ${biggerNumber}`);