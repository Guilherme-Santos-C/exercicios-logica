var isEmpty = function(obj) {
    let values = Object.values(obj);
    return values.length == 0;
};

console.log(isEmpty({}))


