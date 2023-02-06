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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let sTime = s.split(":")
    if(sTime[0]<= 11 && sTime[2].includes("PM") ){
       let cT = Number(sTime[0]) + 12 
        sTime[0] = cT.toString()
    } 
    if(sTime[0] == 12 && sTime[2].includes("AM")){
        sTime[0] = "00"
    }
    let tOD = sTime[2].slice(0,2)
    sTime[2] = tOD
    return sTime.join(":")

    // space complexity => O(1) 
    // time complexity => O(1)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
