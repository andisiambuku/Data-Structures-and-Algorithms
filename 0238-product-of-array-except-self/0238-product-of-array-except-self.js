/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
//     const prefixArr = [], suffixArr = [], resArr = []

//     let multiplicationRes = 1
//     for(let i = 0; i < nums.length; i++){
//         multiplicationRes *= nums[i]
//         prefixArr.push(multiplicationRes)
//     }
//     // nums = [1,2,3,4]
//     // mult = 24
//     // prefixArr = [] [1, 2, 6, 24]

//     multiplicationRes = 1
//     for(let i = nums.length - 1; i > 0; i--) {
//         multiplicationRes *= nums[i]
//         suffixArr[i] = multiplicationRes
//     }
//     // nums = [1,2,3,4]
//     // mult = 24
//     // suffixArr = [ 24, 24, 12, 4 ] []

//     for(let i = 1; i <= nums.length; i++){
//         const result = (suffixArr[i] !== undefined ? suffixArr[i] : 1) * (prefixArr[i-2] !== undefined ? prefixArr[i-2] : 1)
//         resArr.push(result)
//     }
//     // resArr = []
//     // result = suffixArr[i] * prefixArr[i-2]
//     // resArr.push(result)
//     // resArr = [24, 12, 8, 6]
//     return resArr
    
    const n = nums.length;
    
    const answer = new Array(n);
    
    let leftProduct = 1;
    let rightProduct = 1;
    
    // Calculate the left product and store it in the answer array
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    // Calculate the right product and update the answer array
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return answer;
        
};