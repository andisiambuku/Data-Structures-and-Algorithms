/**
 * @param {string} str
 * @return {boolean}
 */

const uniqueString = str => {
	/*
    ** use a set, TC=> O(n), SC=> O(n)
    let set = new Set()
	for (let item of str) {
		if (set.has(item)) {
			return false
		}
		set.add(item)
	}
	return true
    */

	/*sort the string, TC=> O(n log n) SC=> O(n) */
	str = str.split('').sort().join('')
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			return false
		}
	}
	return true
}
