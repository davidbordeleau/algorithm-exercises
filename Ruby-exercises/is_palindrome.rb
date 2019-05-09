def is_palindrome(num)
  return num == num.to_s.split("").reverse.join("").to_i
end
