def valid?(str)
  char = { '(': ')', '{': '}', '[': ']' }
  stack = []
  str.split('').each do |s|
    if char.keys.map(&:to_s).include?(s)
      stack.push(s)
    else
      most_recent = stack.pop
      return false if most_recent.nil? || char[most_recent.to_sym] != s
    end
  end
  stack.empty?
end

p valid?('(){}{}')
