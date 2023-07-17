Array.prototype.last = function() {
    if((this[this.length - 1]) === undefined){
        return -1;
    }
    return this[this.length - 1];
};

const a = [1,23,13,21,3,123,123,21,3,123,12]

console.log(a.last())

// https://leetcode.com/problems/array-prototype-last/

