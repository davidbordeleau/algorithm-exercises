# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next
  def initialize(val)
    @val = val
    @next = nil
  end
end

# You are given two non-empty linked lists representing two non-negative integers.
# The digits are stored in reverse order and each of their nodes contain a single digit.
# Add the two numbers and return it as a linked list.

# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Best solution:

def add_two_numbers(first, second)
  modulus, previous = 0, (dummy_head = ListNode.new nil)

  while first || second || modulus.nonzero?
    modulus, quotient = [first&.val, second&.val, modulus].compact.sum.divmod(10)
    previous, first, second = (previous.next = ListNode.new quotient), first&.next, second&.next
  end

  dummy_head.next
end
