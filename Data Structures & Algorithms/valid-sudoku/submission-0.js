class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const columns = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let row = 0; row < 9; row++) {
            for (let column = 0; column < 9; column++) {
                const value = board[row][column];

                if (value === ".") {
                    continue;
                }

                const rowGroup = Math.floor(row / 3);
                const columnGroup = Math.floor(column / 3);

                const boxIndex = rowGroup * 3 + columnGroup;

                if (
                    rows[row].has(value) ||
                    columns[column].has(value) ||
                    boxes[boxIndex].has(value)
                ) {
                    return false;
                }
                rows[row].add(value);
                columns[column].add(value);
                boxes[boxIndex].add(value);
            }
        }
        return true;
    }
}
