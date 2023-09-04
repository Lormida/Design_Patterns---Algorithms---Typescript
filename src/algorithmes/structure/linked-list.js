// Linked list

function LinkedList() {
  this.head = null
  this.tail = null
}
function Node(value, next, prev) {
  this.value = value
  this.next = next
  this.prev = prev
}

LinkedList.prototype.addToHeadList = function (value) {
  let newNode = new Node(value, this.head, null)
  if (this.head) this.head.prev = newNode
  else this.tail = newNode

  this.head = newNode
}

LinkedList.prototype.addToTailList = function (value) {
  let newNode = new Node(value, null, this.tail)
  if (this.head) this.tail.next = newNode
  else this.tail = newNode

  this.tail = newNode
}

LinkedList.prototype.removeLastNode = function () {
  if (!this.tail) return null
  let val = this.tail.value
  if (this.head == this.tail) {
    this.head = this.tail = null
  } else {
    let temp = this.tail.prev
    temp.next = null
    this.tail = null
    this.tail = temp
  }
  return val
}

LinkedList.prototype.removeFirstNode = function () {
  if (!this.head) return null
  let val = this.head.value
  this.head = this.head.next
  if (this.head) this.head.prev = null
  else this.tail = null
  return val
}

LinkedList.prototype.removeLastNode = function () {
  if (!this.tail) return null
  let val = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) this.tail.next = null
  else this.head = null
  return val
}

LinkedList.prototype.listHasValue = function (value) {
  let currentNode = this.head
  while (currentNode) {
    if (currentNode.value == value) return true
    currentNode = currentNode.next
  }
  return false
}

LinkedList.prototype.indexOf = function (value) {
  let currentNode = this.head
  let iter = 0
  let indexes = []
  while (currentNode) {
    if (currentNode.value == value) indexes.push(iter)
    currentNode = currentNode.next
    iter++
  }
  return indexes
}
/* let ll = new LinkedList()
ll.addToHeadList(300)
ll.addToHeadList(200)
ll.addToHeadList(100)
ll.addToTailList(400)
ll.addToTailList(100)
ll.addToTailList(500)
console.log(ll.listHasValue(200)) // true
console.log(ll.listHasValue(600)) // false
console.log(ll) // [100,200,300,400,100,500]
console.log(ll.indexOf(100)) // [0,4] */
