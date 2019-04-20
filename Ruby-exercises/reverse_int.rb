def reverse(num)
  if num.to_s.split('').first == '-'
    num = num.to_s.split('')
    num.shift
    return num.reverse.unshift('-').join.to_i
  end
  num.to_s.reverse.to_i
end
