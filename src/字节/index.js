
Array.prototype.getIterator = function () {
    let arr = this;
    let index = 0;
    return {
        next: function (num) {
            const ret = arr.slice(index, index + num);
            index += num;
            return ret;
        }
    };
}

const arr = [1, 2, 3, 4, 5];
const iterator = arr.getIterator();
console.log(iterator.next(1));
console.log(iterator.next(1));
console.log(iterator.next(2));
console.log(iterator.next(2));
const i2 = arr.getIterator();
console.log(i2.next(1));
console.log(arr);
