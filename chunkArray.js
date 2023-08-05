var chunk = function(arr, size) {
    let finalArr = []
    let pushArr = []
    for(let i = 0; i < arr.length; i++) {
        if(pushArr.length < size){
            pushArr.push(arr[i])
        }
        else if(pushArr.length >= size){
            finalArr.push(pushArr)
            pushArr = [];
        }
    }
    
    console.log(pushArr)
    console.log(finalArr)
};

chunk([1, 2, 3, 4, 5], 2)