class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //Use a Map
        const freqMap = new Map();

        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        const buckets = Array(nums.length + 1)
            .fill()
            .map(() => []);

        for (const [num, freq] of freqMap) {
            buckets[freq].push(num);
        }

        const result = [];

        for (let freq = buckets.length - 1; freq > 0; freq--) {
            for (const num of buckets[freq]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
