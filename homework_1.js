let row = 4;
let col = 5;

const getTable = (row, col) => {
    let table = [];
    let num = 1;
    for (var i = 0; i < col; i++) {
        if (i == 0) {
            for (var j = 0; j < row; j++) {
                var array = [];
                array.push(num)
                table.push(array);
                num++;
            }
        } else if (i % 2 == 0) {
            for (var j = 0; j < row; j++) {
                table[j].push(num);
                num++;
            }
        } else {
            for (var j = row - 1; j >= 0; j--) {
                table[j].push(num);
                num++;
            }
        }
    }
    return table;
    
   
}
console.log(getTable(row, col));