/**
 * @param {string} str
 * @return {string}
 */

const compressString = str => {
	let res = ''
	let count = 1
	for (let i = 1; i < str.length; i++) {
		if (str[i] === str[i - 1]) {
			count += 1
		} else {
			res += str[i - 1] + count
			count = 1
		}
	}
	res += str[str.length - 1] + count
	return res
}

console.log(compressString('a'))
