var mostWordsFound = function(sentences) {
    let count = 0
    for(let i=0; i<sentences.length; i++){
        let current_count =  sentences[i].split(" ").length 
             
// check if current iteration is < than count else skip
        
        if(current_count>count){
           count = current_count
           }
        
    }
    return count;
};


// 1. split the sentences 
// 2. iterate over the split words
// 3. keep a count of the words
// 4. return the sentence with the maximum number of words

// Time complexity = O(n)
// Space complexity = 
// .length => is a constant operation thus O(1)