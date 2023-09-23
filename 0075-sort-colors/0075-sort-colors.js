/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // const swap = (i,j,arr)=>{
    //     let temp = arr[i]
    //     arr[i] = arr[j]
    //     arr[j] = temp
    // }
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]>nums[j]){
    //             swap(i,j,nums)
    //         }
    //     }
    // }
    let [low, mid, high] = [0, 0, nums.length - 1]

    while(mid <= high){
      if(nums[mid] === 0) {
        [nums[mid], nums[low]]  = [nums[low], nums[mid]]
        low += 1
        mid += 1
      } // check for 1, interchange low and mid, update low and mid by ++
      else if(nums[mid] === 1){
        mid += 1
      } // check for 0 update mid with ++
      else{
        [nums[mid], nums[high]]  = [nums[high], nums[mid]]
        high -= 1
      } //interchange mid and high, update high by --
    }

    return nums
};