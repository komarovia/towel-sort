
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (matrix === undefined || matrix === null) {return []};
let map = new Map();
    for (let i = 0; i < matrix.length; i++) {
    map.set(i, matrix[i])
    };
    
    for (let i = 1; i < map.size; i++) {
    if (i % 2 == 0) {continue}
    else {map.get(i).reverse()}
    };

let obj = Object.fromEntries(map);
let arr = [];

    for (let key in obj) {
    arr.push(obj[key])
    };

arr = arr.flat();

return (arr);
}
