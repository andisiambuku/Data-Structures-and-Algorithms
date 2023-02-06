/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let set = new Set(),
		pointer = 0
	while (pointer < nums.length) {
		if (!set.has(nums[pointer])) {
			set.add(nums[pointer])
			pointer += 1
		} else {
			return true
		}
	}
	return false
}

//runtime complexities
// TC => O(n)
// SC => O(n)
