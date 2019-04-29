# return longest prefix from an array of strings

def longest_common_prefix(strs)
  return '' if strs.empty?

  i = 1
  match = strs[0]
  while i < strs.length
    until strs[i].index(match).zero?
      match.empty? ? break : nil
      match = match[0...-1]
    end
    i += 1
  end
  match.nil? ? '' : match
end
