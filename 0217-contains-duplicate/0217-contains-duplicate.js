/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set();
    
    
    
    for(let i=0; i<nums.length; i++){
        if(set.has(nums[i])){
            return true;
        }else{
            set.add(nums[i])
        }
        
    }
    return false;
    
    
};



// let hashmap={}
//     for(let i=0; i<nums.length; i++){
//         if(hashmap[nums[i]]){
//             hashmap[nums[i]] += 1
//         }else{
//             hashmap[nums[i]] = 1
//         }
//     }
//     for(let i=0; i<nums.length; i++){
//         if(hashmap[nums[i]]>1){
//             return true
//         }
//     }
//     return false