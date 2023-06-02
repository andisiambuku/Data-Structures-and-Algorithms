/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
     if (n === 0){
        return arr
    }
    let flattenedArr = []

    const flatten = (sampleArr, depth)=>{
        for(let i = 0; i < sampleArr.length; i++){
            if(Array.isArray(sampleArr[i]) && n > depth){
                // [0, 1, 2, [3, 4, []]] , n = 2
                // flattenedArr = []
                // flattenedArr.push(0)
                // flattenedArr.push(1)
                // flattenedArr.push(2)
                
                // flatten([3, 4], 1)
                flatten(sampleArr[i], depth + 1)
            }else{
                flattenedArr.push(sampleArr[i])
            }
        }
    }
    flatten(arr, 0)

    return flattenedArr // [0, 1, 2, 3, 4]
};