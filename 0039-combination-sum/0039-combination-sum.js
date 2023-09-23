/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
        const backtracking = (start, ourTarget, arr)=>{
        if(ourTarget === 0){
            results.push([...arr])
            return
        } else if(ourTarget < 0){
            return
        }

        for (let i = start; i < candidates.length; i++){
            arr.push(candidates[i])
            backtracking(i, ourTarget - candidates[i], arr)
            arr.pop()
        }
    }

    let results = []
    backtracking(0, target, [])
    return results
};