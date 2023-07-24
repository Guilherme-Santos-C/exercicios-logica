var twoSum = function(nums, target) {
    let arr = []
    let resultTarget
    for(let i in nums){
        resultTarget = target - nums[i];
        if(nums.includes(resultTarget) && nums.indexOf(resultTarget) != i) arr.push(parseInt(i))
        if(arr.length == 1){
            arr.unshift(0)
        }
    } 
    return arr;
};

console.log(twoSum([3,3], 6))