/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //loop through the array
    for(let i=0; i<nums.length; i++){
        // keep track of indices with i and j
        for(let j= i+1;j<nums.length; j++){
             //tabulate two consecutive numbers
            if(nums[i]+nums[j]===target){
                //return indices that add up too the target
                return[i,j]
            }
        }
    }
};