def roman_to_int(s)
  s = s.split('')
  total = 0
  s.each_with_index do |num, index|
    case num
    when 'I'
      s[index + 1] == 'V' || s[index + 1] == 'X' ? total -= 1 : total += 1
    when 'V'
      total += 5
    when 'X'
      s[index + 1] == 'L' || s[index + 1] == 'C' ? total -= 10 : total += 10
    when 'L'
      total += 50
    when 'C'
      s[index + 1] == 'D' || s[index + 1] == 'M' ? total -= 100 : total += 100
    when 'D'
      total += 500
    when 'M'
      total += 1000
    end
  end
  total
end

# below a bit slower solution

ROMAN_NUMBERS = {
  "I": 1, 'V': 5, "X": 10,
  "L": 50, "C": 100, "D": 500,
  "M": 1000
}

def roman_to_int(s)
  s = s.split('')
  total = 0
  s.each_with_index do |_, index|
    if s[index + 1] && ROMAN_NUMBERS[s[index + 1].to_sym] > ROMAN_NUMBERS[s[index].to_sym]
      total -= ROMAN_NUMBERS[s[index].to_sym]
    else
      total += ROMAN_NUMBERS[s[index].to_sym]
    end
  end
  total
end
