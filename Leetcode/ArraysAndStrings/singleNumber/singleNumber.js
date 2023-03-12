/**
 * @param {number[]} nums
 * @return {number}
 */

// space complexity => O(1)
// time complexity => O(n)
// const singleNumber = nums => {
// 	let bitProduct = 0
// 	for (let i = 0; i < nums.length; i++) {
// 		bitProduct ^= nums[i]
// 	}
// 	return bitProduct
// }

// space complexity => O(n)
// time complexity => O(n)
const singleNumber = nums => {
	let freq = {}
	nums.map(num => {
		if (freq[num]) {
			freq[num] += freq[num]
		} else {
			freq[num] = 1
		}
	})
	for (let item in freq) {
		if (freq[item] === 1) {
			return Number(item)
		}
	}
}
