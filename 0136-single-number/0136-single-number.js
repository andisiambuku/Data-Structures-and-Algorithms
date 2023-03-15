/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let bitProduct = 0 
    for (let i=0;i<nums.length; i++){
        bitProduct ^= nums[i]
    }
    return bitProduct;

    // spaceComplexity => O(1)

    // timeComplexity => O(n)
    
};