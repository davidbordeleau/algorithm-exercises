require '../Ruby-exercises/length_of_longest_substring'


RSpec.describe '#length_of_longest_substring' do
  it 'returns a number' do
    expect(length_of_longest_substring('asddfghgdasf')).to be_a_kind_of(Integer)
  end
  it 'return the length of the longest substring' do
    expect(length_of_longest_substring('asddfghgdasf')).to eq(6)
  end
end
