var removeDuplicates = function(nums) {
    let arrOnce = []; 
    let k =  0;
    for(var i in nums){
        let charI = nums[i]
        if(nums.indexOf(charI) == i){
            arrOnce.push(charI)   
        }else{
            k++
        }
    }
    return k;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))


