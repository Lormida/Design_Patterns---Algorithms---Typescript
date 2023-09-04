// Binary tree

function BST(value) {
  this.value = value
  this.left = null
  this.right = null
}
function log(value) {
  console.log('val : ', value)
}

BST.prototype.contains = function (value) {
  if (value == this.value)
    return true
  const turn = value > this.value ? 'right' : 'left'

  if (turn == 'right' && this.right)
    return this.right.contains(value)
  else if (turn == 'left' && this.left)
    return this.left.contains(value)
  else return false
}

BST.prototype.insert = function (value) {
  if (value >= this.value) {
    if (!this.right)
      this.right = new BST(value)
    else this.right.insert(value)
  }
  if (value < this.value) {
    if (!this.left)
      this.left = new BST(value)
    else this.left.insert(value)
  }
}

BST.prototype.depthTraversal = function (iterator, typeOrder) {
  if (typeOrder == 'pre-order') {
    // pre-order
    iterator(this.value)
    if (this.left)
      this.left.depthFirstTraversal(iterator, typeOrder)
    if (this.right)
      this.right.depthFirstTraversal(iterator, typeOrder)
  }
  else if (typeOrder == 'post-order') {
    // post-order
    if (this.left)
      this.left.depthFirstTraversal(iterator, typeOrder)
    if (this.right)
      this.right.depthFirstTraversal(iterator, typeOrder)
    iterator(this.value)
  }
  else {
    // asc
    if (this.left)
      this.left.depthFirstTraversal(iterator, typeOrder)
    iterator(this.value)
    if (this.right)
      this.right.depthFirstTraversal(iterator, typeOrder)
  }
}

BST.prototype.breadthTraversal = function (iterator) {
  const queue = [this]
  function traversalFn(root) {
    if (root.left)
      queue.push(root.left)
    if (root.right)
      queue.push(root.right)

    if (queue.length) {
      const nextNode = queue.shift()
      log(nextNode.value)
      traversalFn(nextNode)
    }
  }
  traversalFn(this)
}

BST.prototype.getMinVal = function () {
  if (!this.left)
    return this.value
  return this.left.getMinVal()
}

BST.prototype.getMaxVal = function () {
  if (!this.right)
    return this.value
  return this.right.getMaxVal()
}
/* let root = new BST(50)
root.insert(30)
root.insert(70)
root.insert(45)
root.insert(20)
root.insert(10)
root.insert(35)
root.insert(60)
root.insert(100)
root.insert(85)
root.insert(105)
root.insert(59)

root.depthFirstTraversal(log, 'post-order')
root.breadthTraversal(log)
console.log(root.contains(105))
console.log(root.getMinVal())
console.log(root.getMaxVal()) */
