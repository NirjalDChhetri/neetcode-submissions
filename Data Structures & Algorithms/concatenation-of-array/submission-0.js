class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];

        for (let num of nums) {
            ans.push(num);
        }
        for (let num of nums) {
            ans.push(num);
        }
        return ans;
    }
}
