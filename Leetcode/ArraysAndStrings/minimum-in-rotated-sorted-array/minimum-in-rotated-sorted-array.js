/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	let p1 = 0,
		p2 = nums.length - 1
	while (p1 < p2) {
		let mid = Math.floor((p1 + p2) / 2)
		if (nums[mid] > nums[p2]) {
			mid = mid + 1
			p1 = mid
		} else {
			p2 = mid
		}
	}
	return nums[p1]
}

//space complexity => O(1)
//time complexity => O(log n)
