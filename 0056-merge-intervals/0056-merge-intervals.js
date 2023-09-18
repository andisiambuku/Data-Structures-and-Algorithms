/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
        const merged = []
    intervals = intervals.sort((a, b)=> a[0] - b[0])
    let prev = intervals[0]

    for(let i = 1; i < intervals.length; i++){
        const current = intervals[i]

        if(prev[1] >= current[0]){
            prev[1] = Math.max(prev[1], current[1])
        } else {
            merged.push(prev)
            prev = current
        }
    }

    merged.push(prev)
    return merged
};