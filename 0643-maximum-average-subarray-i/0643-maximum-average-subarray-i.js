/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let win_start = 0;
  let win_end = 0;
  let total = 0;
  
  let res = Number.NEGATIVE_INFINITY;
  while (win_end < nums.length) {
    if (win_end - win_start + 1 > k) {
      total -= nums[win_start];
      win_start += 1;
    }
    total += nums[win_end];
    
    if (win_end - win_start + 1 === k) {
      let avg = total / k;
      res = Math.max(res, avg);
    }
    win_end += 1;
  }
  return res;
};