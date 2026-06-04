class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) {
            return false;
        }

        const dataCount = {};

        for (let char of s) {
            dataCount[char] = (dataCount[char] || 0) + 1;
        }

        for (let char of t) {
            if (!dataCount[char]) {
                return false;
            }
            dataCount[char]--;
        }
        return true;
    }
}
