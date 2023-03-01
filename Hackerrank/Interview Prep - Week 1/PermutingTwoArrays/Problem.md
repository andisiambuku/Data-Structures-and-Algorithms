# Problem

There are two `n` - element arrays of integers, `A` and `B`. Permute them into `A'` and `B'` sucha that the relation `A'[i] + B'[i] >= k` holds for all `i` where `0 <= i < n`. There will be  queries consisting of `A` , `B`, and `K`. For each query, return `YES` if some permutation `A'`,`B'` satisfying the relation exists. Otherwise, return `NO`.

#### Example

A = `[0 ,1]`
B = `[0, 2]`
k = `1`

A valid `A'`, `B'` is `A'= [1, 0]` and `B'=[0, 2]`
ie. `1 + 0 >= 1` and `0 + 2 >= 1`
Return `YES`  


##### The Function Description

Complete the twoArrays function in the editor below. It should return a string, either `YES` or `NO`.

twoArrays has the following parameter(s):

 - int k: an integer
 - int `A[n]`: an array of integers
 - int `B[n]`: an array of integers

##### Returns
- string: either YES or NO


##### Sample Input
STDIN           Function

------------

3 10        A[] and B[] size n = 3, k = 10
2 1 3       A = [2, 1, 3]
7 8 9       B = [7, 8, 9]

##### Sample Output

`YES`

##### Explanation
There are two queries:
Permute A and B into A' = [1, 2, 3], B' = [9, 8, 7]  so that the following statements are true
 - A[0] + B[1] = 1 + 9 = 10 >= K
 - A[1] + B[1] = 2 + 8 = 10 >= K
 - A[2] + B[2] = 3 + 7 = 10 >= K

