// Добавляет элементы в конец массива
const arr = [1, 2, 3, 4, 5];


function pushToArray() {
    let a = prompt('Name');
    arr.push(a);
}

console.log(arr)
console.log( arr.push(6, 7, 8, 9) )
// console.log( arr )

pushToArray();
console.log(arr)