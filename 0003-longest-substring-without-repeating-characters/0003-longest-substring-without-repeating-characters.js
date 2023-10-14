/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        const set = new Set()
    let p1 = 0, p2 = 0, maxSize = 0

    while(p2 < s.length){
        const item = s[p2]
        if(set.has(item)){
            const remove = s[p1]
            set.delete(remove)
            p1 += 1
        } else {
            set.add(item)
            maxSize = Math.max(maxSize, set.size)
            p2 += 1
        }
    }
    return maxSize
};