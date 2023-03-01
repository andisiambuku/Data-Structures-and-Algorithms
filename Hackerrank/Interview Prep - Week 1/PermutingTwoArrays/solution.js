/**
 * @param {number} k
 * @param {number[]} A
 * @param {number[]} B
 * @return {"NO" | "YES"}
 */

const twoArrays = (k, A, B) => {
	// Write your code here
	A = A.sort((a, b) => a - b)
	B = B.sort((a, b) => b - a)
	for (let i = 0; i < A.length; i++) {
		if (A[i] + B[i] < k) {
			return 'NO'
		}
	}
	return 'YES'
}
