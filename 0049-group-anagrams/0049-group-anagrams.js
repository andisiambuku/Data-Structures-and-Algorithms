/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashMap = {}
    const sorted = (str) =>{
        return str.split('').sort().join('')
    }
    
    for(let i=0; i<strs.length; i++){
        let item= strs[i]
        let sortedStr = sorted(item)
        if(hashMap[sortedStr]){
           hashMap[sortedStr].push(item)
           }else{
               hashMap[sortedStr] = [item]
           }
    }
    return Object.values(hashMap)
    
    
};