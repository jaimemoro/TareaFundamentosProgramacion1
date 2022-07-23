let userFirstNumber = parseInt(prompt("Por favor, introduce el primer número."));
let userSecondNumber = parseInt(prompt("Por favor, introduce el segundo número."));
while(userFirstNumber==userSecondNumber){
    userSecondNumber = parseInt(prompt("Los dos números deben ser distintos. Por favor, introduce el segundo número de nuevo."));
}
let biggerNumber;
(userFirstNumber>userSecondNumber)?biggerNumber=userFirstNumber:biggerNumber=userSecondNumber;
console.log(`El mayor de los dos números es el ${biggerNumber}`);