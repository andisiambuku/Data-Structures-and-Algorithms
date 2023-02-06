/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let left = 0,
		right = height.length - 1,
		res = 0
	while (left < right) {
		res = Math.min(height[left], height[right]) * (right - left)
		if (res > maxArea) {
			maxArea = res
		}
		if (height[left] < height[right]) {
			left += 1
		} else {
			right -= 1
		}
	}
	return res
}
