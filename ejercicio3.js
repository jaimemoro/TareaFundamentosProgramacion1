let arrayOfNumber = [3,15,-4,-5,17,5657,-585,4,5,5544];
let totalOddNumber = 0;
let totalBigNumber = 0;
for (let i=1;i<arrayOfNumber.length; i++){
    if(arrayOfNumber[i]%2 != 0) totalOddNumber++;
    if(arrayOfNumber[i]>100) totalBigNumber++;
}
console.log(`Hay ${totalOddNumber} números impares.`);
console.log(`Hay ${totalBigNumber} números mayores de 100.`);