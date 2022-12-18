/**
 * @param {any[]} items
 * @return {any[]}
 */

const reverseOrderOfArray = items => {
	const swap = (currentIdx, subsequentLastIdx) => {
		let tmp = items[currentIdx]
		items[currentIdx] = items[subsequentLastIdx]
		items[subsequentLastIdx] = tmp
	}
	for (let i = 0; i < items.length / 2; i++) {
		swap(i, items.length - 1 - i)
	}
	return items
}
