'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
   let nums = arr.length
   let count = 0 
   let count1 = 0 
   let count2 = 0 
   
   for(let i=0; i< arr.length;i++){
       if(arr[i] === 0 ){
           count += 1
       }else if(arr[i] >= 1){
           count1 += 1
       }else{
           count2 += 1
       }
   }
   let res = (count/nums).toFixed(6)
   let res1 = (count1/nums).toFixed(6)
   let res2 = (count2/nums).toFixed(6)
   console.log(res1)
   console.log(res2)
   console.log(res)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
