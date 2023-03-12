/**
 * @param {number[]} nums
 * @return {number}
 */

//space complexity => O(1)
//time complexity => O(n) //since the nums array is already sorted
var removeDuplicates = function (nums) {
	if (nums.length == 0) return nums
	let p1 = 0,
		p2 = 1
	while (p2 < nums.length) {
		if (nums[p1] == nums[p2]) {
			p2 += 1
		} else {
			p1 += 1
			nums[p1] = nums[p2]
			p2 += 1
		}
	}
	p1 += 1
	return p1
}
