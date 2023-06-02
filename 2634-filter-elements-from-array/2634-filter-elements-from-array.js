/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
 // [2,3,4,6].filter((num)=>num >=4) 
    let filteredArr = []
    
    for(let i=0; i < arr.length; i++){
        if(fn(arr[i], i)){
            filteredArr.push(arr[i])
        }   
    }
     return filteredArr
    
    
};