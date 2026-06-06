class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const data of strs) {
            const key = data.split("").sort().join("");

            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(data);
        }
        return Array.from(map.values());
    }
}
