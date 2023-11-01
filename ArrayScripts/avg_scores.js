"use script";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
let i;

function getAverage(scores) {
    //loop
    let total = 0;
    for (let i = 0; i < scores.length; i++){
        total += scores[i];
    }
    
    let scoreAverage = total/scores.length
}
//add, div by length
console.log("You're score average is" + (getAverage(yourScores)) + ".")