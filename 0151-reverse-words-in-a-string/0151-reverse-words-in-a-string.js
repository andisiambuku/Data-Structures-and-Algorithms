/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
     s = s.replace(/\s{2,}/g, ' ').trim()
    let arr = s.split(" ")
    for(let i = 0; i < arr.length/2; i++){
        const currIdx = i, lastIdx = arr.length - 1 - i
        swap(currIdx, lastIdx, arr)
    }

    return arr.join(" ")
};
//helper function to assit with reversing
const swap = (currIdx, lastIdx, arr)=>{
    const temp = arr[currIdx]
    arr[currIdx] = arr[lastIdx]
    arr[lastIdx] = temp
}
