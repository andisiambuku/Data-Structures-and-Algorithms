/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
      let candidate = nums[0]; // Assume the first element as the candidate
  let count = 1; // Initialize the count of the candidate as 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++; // Increment count if the current element is the candidate
    } else {
      count--; // Decrement count if the current element is not the candidate

      if (count === 0) {
        // Reset candidate when count becomes 0
        candidate = nums[i];
        count = 1;
      }
    }
  }

  return candidate;
    
};