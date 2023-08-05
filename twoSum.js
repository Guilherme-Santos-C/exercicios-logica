/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let resultArrarr = []
    let numDesconhecido 
    for(let i in nums){
        numDesconhecido = target - nums[i]
        if(nums.includes(numDesconhecido) && nums.indexOf(numDesconhecido) != i && resultArrarr <= 2){
            resultArrarr.push(parseInt(i), nums.indexOf(numDesconhecido))
        }
    }
    return resultArrarr;
};

twoSum([3,2,4], 6)
