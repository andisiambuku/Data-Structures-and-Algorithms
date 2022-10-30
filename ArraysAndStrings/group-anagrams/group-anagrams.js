/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = strs => {
	let results = {}

	const sortWord = word => {
		return word
			.split('')
			.sort((a, b) => (a < b ? -1 : 1))
			.join('')
	}

	for (let i = 0; i < strs.length; i++) {
		let sortedWord = sortWord(strs[i])

		if (results[sortedWord]) {
			results[sortedWord].push(strs[i])
		} else {
			results[sortedWord] = [strs[i]]
		}
	}
	return Object.values(results)
}
