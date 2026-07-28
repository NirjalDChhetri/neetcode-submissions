class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);

        // Stores indices of days that are still waiting
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const prevDay = stack.pop();

                result[prevDay] = i - prevDay;
            }
            stack.push(i);
        }

        return result;
    }
}
