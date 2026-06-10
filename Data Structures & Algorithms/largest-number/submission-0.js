class Solution {
    /**
     * @param {number[]} nums
     * @return {string}
     */
    largestNumber(nums) {
        const arr = nums.map(String);

        arr.sort((a, b) => (b + a).localeCompare(a + b));

        return arr[0] === "0" ? "0" : arr.join("");
    }
}
