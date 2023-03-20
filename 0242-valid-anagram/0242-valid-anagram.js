/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    let hashmap = {}
    for(let i = 0; i < s.length; i++){
        if(hashmap[s[i]]) {
            hashmap[s[i]] += 1
        }else{
            hashmap[s[i]] = 1
        }
    }
    for(let i = 0; i < t.length; i++){
        if(hashmap[t[i]]){
            hashmap[t[i]] -= 1
        } else {
            return false
        }
    }
    return true
};