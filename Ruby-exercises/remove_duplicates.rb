def remove_duplicates(nums)
  return if nums.length == 0

  nums.length.times { |i| nums[i] = nil if nums[i] == nums[i + 1] }
  nums.delete(nil)
end

# or remove an element

def remove_element(nums, val)
  nums.delete(val)
  nums.length
end

# a bit faster:

def remove_element(nums, val)
  nums.reject! { |num| num == val }
  nums.length
end
