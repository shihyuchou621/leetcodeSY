var findMaxAverage = function(nums, k) {
  var nums2 = [];
  for(i = 0; i <= nums.length - k;i++) {
      nums2[i] = nums.slice(i,i + k).reduce((sum, value) => sum + value);
  }
  return Math.max(...nums2) / k;
};
  console.log(findMaxAverage([1,12,-5,-6,50,3], 4));


  function aaa() {
    var v = 1;
    function bbb() {
      v = 2;
    }
    bbb();
    console.log(v);
  }

  aaa();