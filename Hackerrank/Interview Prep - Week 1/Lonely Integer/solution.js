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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    let uniqueVal = new Map()
    
    for(let i=0; i<a.length; i++){
        // let count = 0

        if(uniqueVal.has(a[i])){ 
            uniqueVal.delete(a[i])
            // console.log("dummy text")
        }else{
            uniqueVal.set(a[i], 1)
        }
        
        
        // for(let j=0; j<a.length; j++){
        //     if(a[i] === a[j] && i != j){
        //         count += 1
        //     }
        // }
        // if (count === 0){
        //     return  a[i]
        // }   
    }
    return uniqueVal.keys().next().value
    
    // space complexity => O(1)
    // time complexity => O(n)^2
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
