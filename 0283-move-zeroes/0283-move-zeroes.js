/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIdx = 0; // Points to the next position where a non-zero element should be placed

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // If the current element is non-zero, move it to the nonZeroIdx position
            nums[nonZeroIdx] = nums[i];

            // If the current element was not at the nonZeroIdx position, set it to 0
            if (nonZeroIdx !== i) {
                nums[i] = 0;
            }

            // Increment nonZeroIdx to the next available position
            nonZeroIdx++;
        }
    }
    
};