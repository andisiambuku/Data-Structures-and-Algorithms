/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //if less than 0
    if(x<0){
       return false
       }
    
    //less than 10 but more than 0
    if(x<10){
        return true
    }
    // splitting to individual digits
    let xSplit = x.toString().split(""), xDigit = 0
       
    while(xDigit < xSplit.length){
          if(xSplit[xDigit] != xSplit[xSplit.length -xDigit -1]){
                    return false
                }
            xDigit += 1
          }
    
    //
//     for(let i=0; i<xSplit.length; i++){
//         //comparing the first and last digit 
//         if(xSplit[i] != xSplit[xSplit.length -i -1]){
            
//             return false
//         }
//     }
    return true
}

// Time Complexity
// Space Complexity

// 1 -> 2 -> 1 = 121
// 1 <- 2 <- 1 = 121 Palindrome

// -1 -> 2 -> 1 = -121
//  -1<- 2<- 1 = 121- Not Palindrome

// 1 -> 0 = 10 
// 1 <- 0 = 01 Not Palindrome