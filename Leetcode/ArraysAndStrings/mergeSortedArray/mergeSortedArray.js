/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	let t2 = 0
	for (let i = 0; i < nums1.length; i++) {
		if (i + 1 > m) {
			nums1[i] = nums2[t2]
			t2 += 1
		}
	}
	return nums1.sort((a, b) => a - b)
}

// space complexity => O(1)
// time complexity => O(n log n)
