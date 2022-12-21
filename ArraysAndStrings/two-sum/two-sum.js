/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let hash = {}
	for (let i = 0; i < nums.length; i++) {
		if (hash[target - nums[i]] !== undefined) {
			return [hash[target - nums[i]], i]
		}
		hash[nums[i]] = i
	}
	return []
}
