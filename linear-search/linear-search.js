// Линейный поиск

const arr = [1,4,5,8,5,1,2,4,2,11];
let count = 0;

function linearSearch (array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }

    return null;
}

console.log(linearSearch(arr, 2));
console.log('count = ', count);