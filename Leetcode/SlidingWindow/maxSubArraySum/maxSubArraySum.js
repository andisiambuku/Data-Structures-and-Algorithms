/**
 * @param {number[]} nums
 * @param {number} size
 * @return {number}
 */

const maxSubArraySum = (nums, size) => {
	if (size >= nums.length || size < 0) return 0
	let maxSumSeen = 0
	let currentSum = 0

	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i]
		if (i >= size - 1) {
			maxSumSeen = Math.max(maxSumSeen, currentSum)
			currentSum -= nums[i - (size - 1)]
		}
	}
	return maxSumSeen
}
