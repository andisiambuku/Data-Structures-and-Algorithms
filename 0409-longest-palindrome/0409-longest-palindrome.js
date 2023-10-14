/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
        const freq = {}
    for(let i = 0; i < s.length; i++){
        const item = s[i]
        if(freq[item]){
            freq[item] += 1
        } else {
            freq[item] = 1
        }
    }

    let oddFrequencyExists = false, count = 0
    for(item in freq){
        count += Math.floor(freq[item] / 2) * 2
        if(freq[item] % 2 === 1) oddFrequencyExists = true
    }

    if(oddFrequencyExists) count += 1
    return count
};