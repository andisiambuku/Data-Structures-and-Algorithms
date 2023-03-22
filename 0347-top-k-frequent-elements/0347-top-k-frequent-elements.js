/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashMap = {}

    for(let i =0; i<nums.length ; i++){
        if(hashMap[nums[i]]){
            let count =  hashMap[nums[i]] + 1
           hashMap[nums[i]] = count
        }else{
            hashMap[nums[i]] = 1
        }
    }
    let occur = []
    for(let key in hashMap){    
    //    console.log(hashMap[item])
        occur.push([key,hashMap[key]])
    }
    // 
    occur.sort(function(a, b) {
            return b[1] - a[1];
    });
    console.log(occur)
    let result = []
    for(let i=0; i<k; i++){
        result.push(Number(occur[i][0]))
    }

    return result;

    // Time Complexity: O(n log n)
    // Space Complexity: O(n)
    
};