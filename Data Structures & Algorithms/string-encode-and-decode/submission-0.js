class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let str of strs) {
            result += str.length + "#" + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        console.log(str.length);

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            const length = Number(str.substring(i, j));

            const word = str.substring(j + 1, j + 1 + length);

            result.push(word);
            i = j + 1 + length;
        }
        return result;
    }
}
