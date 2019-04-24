def is_palindrome(x)
  return x == x.to_s.split("").reverse.join("").to_i
end
