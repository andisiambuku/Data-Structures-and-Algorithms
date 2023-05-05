
var MyHashSet = function() {
    //initializing HashSet using an array
    this.arr = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
   const found = this.arr.includes(key) 
   if(!found){
       this.arr.push(key)
   }
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
   const find = this.arr.indexOf(key)
   if(find >= 0){
       this.arr.splice(find,1)
   }
  
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.arr.includes(key)

    
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */