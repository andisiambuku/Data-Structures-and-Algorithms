/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let ans = 0,
		i = 0,
		j = height.length - 1
	while (i < j) {
		ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i))
		height[i] <= height[j] ? i++ : j--
	}
	return ans
}
