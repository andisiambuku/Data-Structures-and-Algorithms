/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let res = new Set()
	let partialSum = 0
	nums = nums.sort((a, b) => a - b)
	for (let i = 0; i < nums.length; i++) {
		let diff = 0 - nums[i]
		let left = i + 1
		let right = nums.length - 1
		while (left < right) {
			partialSum = nums[left] + nums[right]
			if (partialSum == diff) {
				res.add(`${nums[i]}, ${nums[left]}, ${nums[right]}`)
				left += 1
				right -= 1
			} else if (diff > partialSum) {
				left += 1
			} else {
				right -= 1
			}
		}
	}

	return Array.from(res).map(str => str.split(',').map(Number))
}
