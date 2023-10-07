/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
        let maxArea = -Infinity, left = 0, right = height.length - 1

    while(left < right) {
        let minHeight = Math.min(height[left], height[right])
        let width = Math.abs(left - right)
        const area = minHeight * width
        maxArea = Math.max(maxArea, area)

        if(height[left] < height[right]){
            left += 1
        }else if(height[right] < height[left]){
            right -= 1
        } else {
            left += 1
            right -= 1
        }
    }

    return maxArea
};