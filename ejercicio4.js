const MAX_NUMBER_OF_DICE = 6;
const MIN_NUMBER_OF_DICE = 1;
let array = [];
for (let i=0; i<6000; i++){
    let firstDiceRollResult = Math.floor((Math.random() * MAX_NUMBER_OF_DICE - MIN_NUMBER_OF_DICE + 1) + MIN_NUMBER_OF_DICE);
    let secondDiceRollResult = Math.floor((Math.random() * MAX_NUMBER_OF_DICE - MIN_NUMBER_OF_DICE + 1) + MIN_NUMBER_OF_DICE);
    let totalResult = (firstDiceRollResult+secondDiceRollResult);
    array.push(totalResult);
    }
import { findMean } from "./numericArrayOperations.js";
console.log(`La media de las tiradas es ${findMean(array)}`);