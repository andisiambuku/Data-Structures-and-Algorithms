/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let sortedNums = nums.sort((a, b) => a - b)
	let map = {}
	for (let i = 0; i < sortedNums.length; i++) {
		if (map[sortedNums[i]]) {
			map[sortedNums[i]] += 1
		} else {
			map[sortedNums[i]] = 1
		}
	}
	for (item in map) {
		if (map[item] !== 3) {
			return item
		}
	}
}
