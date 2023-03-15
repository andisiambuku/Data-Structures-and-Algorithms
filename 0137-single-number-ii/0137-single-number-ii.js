/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let singles=0 , doubles=0
    for(let i = 0; i<nums.length; i++){
        singles = (~doubles)&(singles^nums[i])
        doubles = (~singles)&(doubles^nums[i])
    }
    return singles
    // spaceComplexity => O(1)

    // timeComplexity => O(n)

};