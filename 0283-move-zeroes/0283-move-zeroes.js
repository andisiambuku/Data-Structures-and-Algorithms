/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let z = 0
    
    for(i=0; i<nums.length; i++){
        
        if(nums[i] !== 0){
            
           nums[z] = nums[i]
            
            if(z !== i){
                
               nums[i] = 0
               }
            z++
           }
    }
    
};