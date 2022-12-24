/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let prefix = []
	let postfix = []
	let output = []

	let prevMultiplication = 1
	for (let i = 0; i < nums.length; i++) {
		prevMultiplication *= nums[i]
		prefix.push(prevMultiplication)
	}
	prevMultiplication = 1
	for (let j = nums.length - 1; j >= 0; j--) {
		prevMultiplication *= nums[j]
		postfix[j] = prevMultiplication
	}

	for (let k = 1; k <= nums.length; k++) {
		let res = (prefix[k - 2] === undefined ? 1 : prefix[k - 2]) * (postfix[k] === undefined ? 1 : postfix[k])
		output.push(res)
	}

	return output
}
