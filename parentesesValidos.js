var filter = function(arr, fn) {
    let filtredArr = []
    arr.forEach((n) =>{
        fn(n, arr.indexOf(n)) ? filtredArr.push(n) : false 
    })
    console.log(filtredArr)
};

filter([1,2,3], function firstIndex(n, i) { return i === 0; })
