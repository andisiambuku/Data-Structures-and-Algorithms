/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // Create a character frequency map for string t
  const tFreqMap = {};
  for (let char of t) {
    tFreqMap[char] = (tFreqMap[char] || 0) + 1;
  }

  let left = 0;
  let minLen = Infinity;
  let minWindowStart = 0;
  let charCount = t.length;

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];

    // Update the character frequency map for the current window
    if (tFreqMap[rightChar] !== undefined) {
      if (tFreqMap[rightChar] > 0) {
        charCount--;
      }
      tFreqMap[rightChar]--;
    }

    // Try to minimize the window size by moving the left pointer
    while (charCount === 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minWindowStart = left;
      }

      const leftChar = s[left];
      if (tFreqMap[leftChar] !== undefined) {
        tFreqMap[leftChar]++;
        if (tFreqMap[leftChar] > 0) {
          charCount++;
        }
      }

      left++;
    }
  }

  if (minLen === Infinity) {
    return "";
  }

  return s.substr(minWindowStart, minLen);
};