class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq = {};
        let left = 0;
        let maxFreq = 0;
        let answer = 0;

        for (let right = 0; right < s.length; right++) {
            freq[s[right]] = (freq[s[right]] || 0) + 1;
            maxFreq = Math.max(maxFreq, freq[s[right]]);

            while (right - left + 1 - maxFreq > k) {
                freq[s[left]]--;
                left++;
            }
            answer = Math.max(answer, right - left + 1);
        }
        return answer;
    }
}
