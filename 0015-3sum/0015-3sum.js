/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
     const triplets = [];
  nums.sort((a, b) => a - b); // Step 1: Sort the array
  
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { // Skip duplicates
      let left = i + 1;
      let right = nums.length - 1;
      const target = -nums[i]; // Find pairs that sum up to -nums[i]
      
      while (left < right) {
        if (nums[left] + nums[right] === target) {
          triplets.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
          while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
          left++;
          right--;
        } else if (nums[left] + nums[right] < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  
  return triplets;
    
};