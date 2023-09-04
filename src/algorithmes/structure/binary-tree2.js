class NodeTree {
  value
  childs = {
    left: null,
    right: null,
  }

  constructor(value) {
    this.value = value
  }
}
class BinaryTree {
  root = null
  add(value, root = this.root) {
    /**
       * If we don't have root element
       */
    if (!root) {
      this.root = new NodeTree(value)
      return
    }
    // Add at left subtree
    if (value < root.value) {
      // If we reach the deepest leaf in subtree -> create new one
      if (!root.childs.left?.value) {
        root.childs.left = new NodeTree(value)
        return
      }
      this.add(value, root.childs.left)
    }
    // Add at right subtree
    else {
      // If we reach the deepest leaf in subtree -> create new one
      if (!root.childs.right?.value) {
        root.childs.right = new NodeTree(value)
        return
      }
      this.add(value, root.childs.right)
    }
  }

  print(result = '') {
    const tree = [this.root]
    while (tree.length > 0) {
      const lastSubtree = tree.shift()
      if (!lastSubtree)
        break

      result += `${lastSubtree.value} `
      if (lastSubtree.childs?.left)
        tree.unshift(lastSubtree.childs?.left)

      if (lastSubtree.childs?.right)
        tree.unshift(lastSubtree.childs?.right)
    }
    return result
  }
}
const tree = new BinaryTree()
tree.add(5)
tree.add(2)
tree.add(6)
tree.add(-1)
tree.add(1)
tree.add(11)
tree.add(-5)
tree.add(99)
tree.print() // ?

export {}
