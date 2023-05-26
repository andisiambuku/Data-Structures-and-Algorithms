/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if(x<0){
       return false
   }
    if(x<10){
        return true
    }
    let xSplit = x.toString().split("")
    
    for(let i=0; i< xSplit.length; i++){
        if (xSplit[i] != xSplit[xSplit.length-i-1]){
            return false
        }
    }
    return true
}


