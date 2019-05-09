require '../Ruby-exercises/is_palindrome'


RSpec.describe '#is_palindrome' do
  it 'is a palindrome that returns true or false' do
    expect(is_palindrome(131)).to be_truthy
    expect(is_palindrome(13)).to be_falsy
  end
end
