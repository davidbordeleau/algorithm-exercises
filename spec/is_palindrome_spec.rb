require '../Ruby-exercises/is_palindrome'


RSpec.describe '#is_palindrome' do
  it 'is a palindrome returns true or false' do
    expect(is_palindrome(131)).to eq(true)
    expect(is_palindrome(13)).to eq(false)
  end
end
