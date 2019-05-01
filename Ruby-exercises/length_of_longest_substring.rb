# Given a string, find the length of the longest substring without repeating characters.

def length_of_longest_substring(s)
  return 0 if s.size.zero?

  chars_seen = {}
  j = 0
  answer = 0
  s.each_char.with_index do |letter, i|
    if chars_seen[letter]
      j = [chars_seen[letter] + 1, j].max
    end
    chars_seen[letter] = i
    answer = [answer, i - j + 1].max
  end
  answer
end
