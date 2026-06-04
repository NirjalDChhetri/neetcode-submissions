class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const data = new Set();
        for (const num of nums) {
            if (data.has(num)) {
                return true;
            }
            data.add(num);
        }
        return false;
    }
}
