function sum(nums, target) {
  for (i = 0; i < nums.length; i ++) {
    for (j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j]
      }
    }
  }
};

// O(n^2) and O(1)

function sum2(nums, target) {
  for (i = 0; i < nums.length; i ++) {
    if (nums.includes(target - nums[i]) && i !== nums.indexOf(target - nums[i])) {
      return [i, nums.indexOf(target - nums[i])].sort((a, b) => a - b);
    }
  }
}

// O(n) and O(1)
