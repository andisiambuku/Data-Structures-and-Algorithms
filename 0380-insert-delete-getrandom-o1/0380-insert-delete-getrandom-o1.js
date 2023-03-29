
var RandomizedSet = function() {
    this.map = new Map()
    this.arr = []
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)){
        return false
    }
    this.arr.push(val)
    let idx = this.arr.length === 0 ? 0 :this.arr.length - 1
    this.map.set(val,idx)
    return true    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map.has(val)){
        let currIdx = this.map.get(val)
        let lastIdx = this.arr.length - 1
        let lastItem = this.arr[lastIdx]
        
        swap(currIdx,lastIdx,this.arr)
        this.map.set(lastItem, currIdx)
        this.map.delete(val)
        this.arr.pop()
        return true
       
       }
    return false
    
};
const swap =(currIdx,lastIdx,arr)=>{
    let temp = arr[currIdx]
    arr[currIdx] = arr[lastIdx]
    arr[lastIdx] = temp
    
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let random = Math.floor((Math.random() * this.arr.length))
    return this.arr[random]
    
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */