# Given the root node of a tree, return
# an array where each element is the width
# of the tree at each level.

class Node
  def initialize(data)
    @data = data
    @children = []
  end

  def add(data)
    @children.push(Node.new(data))
  end
end

root = Node.new(5)
root.add(4)

def level_width(root)
  result = [0]
  arr = ['stop']

  while arr.length > 1
    if node != 'stop'
      arr.push(arr.shift.children.flatten!)
      result[result.length - 1] += 1
    else
      result.push(0)
      arr.push('stop')
    end
  end
  result
end

p level_width(root)
