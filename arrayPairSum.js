var arrayPairSum = function(nums) {
    nums = nums.sort((a,b) => a-b);
    var result = 0;
    for(i = 0; i < nums.length / 2; i++) {
        result += nums[i * 2];
    }
    return result;
};

console.log(arrayPairSum( [1,4,3,2]));
