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
       
    while(xDigit < xSplit.length /2){
          if(xSplit[xDigit] != xSplit[xSplit.length -xDigit -1]){
                    return false
                }
                xDigit += 1
          }
    
    return true
}

// Time Complexity -> O(n)/2
// Space Complexity -> O(n)

// 1 -> 2 -> 1 = 121
// 1 <- 2 <- 1 = 121 Palindrome

// -1 -> 2 -> 1 = -121
//  -1<- 2<- 1 = 121- Not Palindrome

// 1 -> 0 = 10 
// 1 <- 0 = 01 Not Palindrome