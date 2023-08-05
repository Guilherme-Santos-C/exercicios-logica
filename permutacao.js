var majorityElement = function(nums) {    
    for(let i = 0; i < nums.length ; i++){
        let arr = nums.filter((n) => {
            return n == nums[i];
        })
        if(nums[i+100] == nums[i]) i += 100
        if(arr.length > nums.length/2) return arr[0];
    }
};

