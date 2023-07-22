var removeElement = function(nums, val) {
    let array = nums;
    while (array.includes(val)) array.splice(array.indexOf(val), 1)
    nums = array; 
};

