/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let set = new Set(),
		max = 0,
		pointerOne = 0,
		pointerTwo = 0

	while (pointerTwo < s.length) {
		if (!set.has(s[pointerTwo])) {
			set.add(s[pointerTwo])
			pointerTwo += 1
			max = Math.max(max, set.size)
		} else {
			set.delete(s[pointerOne])
			pointerOne += 1
		}
	}
	return max
}
