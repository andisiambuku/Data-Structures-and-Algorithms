var findDuplicate = function(nums) {
    // space complexity is O(1) but is very inefficient interms of time complexity
    for(let i=0; i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]===nums[j]&& i!==j){
                return nums[i]
            }
        }
    }
}

