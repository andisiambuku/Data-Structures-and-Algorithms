'use strict';

const fs = require('fs');

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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // Write your code here
    
    // let numArr = n.toString(2).split("")
    // // console.log(numArr)
    // for(let i=0;i< numArr.length; i++){
    //     if(numArr[i] == 0){
    //         numArr[i] = 1
    //     }else{
    //         numArr[i] = 0
    //     }   
    // }
    // let bitFlip = numArr.join("")
    // // console.log("this is the joined arr",bitFlip)
    // let result = parseInt(bitFlip,2)
    
    
    return ~n >>> 0
    
    // return bitFlip
    //  console.log("this is the result arr",result)
    
    
    //9 => 1001
    




















}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
