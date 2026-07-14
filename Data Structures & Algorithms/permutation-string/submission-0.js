class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n = s1.length;
        const m = s2.length;

        if (n > m) return false;

        const freq1 = new Array(26).fill(0);
        const window = new Array(26).fill(0);

        for (const ch of s1) {
            freq1[ch.charCodeAt(0) - 97]++;
        }

        for (let i = 0; i < n; i++) {
            window[s2.charCodeAt(i) - 97]++;
        }

        if (this.isEqual(freq1, window)) {
            return true;
        }

        for (let right = n; right < m; right++) {
            window[s2.charCodeAt(right) - 97]++;

            window[s2.charCodeAt(right - n) - 97]--;

            if (this.isEqual(freq1, window)) {
                return true;
            }
        }

        return false;
    }

    isEqual(a, b) {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
}
