class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //Use a Map
        const map = new Map();

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        // nums = [1,2,2,3,3,3] -> map {1->1, 2->2, 3->3}

        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (let [num, freq] of map) {
            buckets[freq].push(num);
        }

        //buckets[1] = [1]
        //buckets[1] = [1]
        //buckets[1] = [1]

        const result = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (let num of buckets[i]) {
                result.push(num);

                if (result.length === k) {
                    return result;
                }
            }
        }
        return result;
    }
}
