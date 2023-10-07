/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const j = s.replace(/[^0-9a-z]/gi,"").toLowerCase()
    
    for(let i=0;i<j.length;i++){
        
        if(j[i] === j[j.length -1 -i]){
            continue
           }else{
               return false 
         }
    }
    
     return true
    
   
};