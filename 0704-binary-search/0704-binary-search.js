/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
        let low = 0, high = nums.length - 1

    while(low <= high) {
        let mid = Math.floor(low + (high - low)/2)

        if(nums[mid] === target) return mid
        if(nums[mid] < target){
            low = mid + 1
        }
        if(nums[mid] > target){
            high = mid - 1
        }
    }

    return -1
};