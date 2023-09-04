// Hash table

function HashTable(size) {
  this.bucket = new Array(size)
  this.bucketSize = size
}

function HashNode(key, value, next = null) {
  this.key = key
  this.value = value
  this.next = next
}
HashTable.prototype.hash = function (key) {
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  return hash % this.bucketSize
}
HashTable.prototype.insert = function (key, value) {
  let node = new HashNode(key, value)
  let hash = this.hash(key)

  if (!this.bucket[hash]) this.bucket[hash] = node
  else {
    let currentNode = this.bucket[hash]
    while (currentNode) {
      if (currentNode.key == key) {
        currentNode.value = value
        return
      }

      if (!currentNode.next) currentNode.next = node
      currentNode = currentNode.next
    }
  }
}
HashTable.prototype.get = function (key) {
  let hash = this.hash(key)
  if (!this.bucket[hash]) return null
  else {
    let currentNode = this.bucket[hash]
    while (currentNode) {
      if (currentNode.key == key) return currentNode.value
      currentNode = currentNode.next
    }
    return 'none'
  }
}
HashTable.prototype.retrieveAll = function () {
  let pairs = []
  function toPair(node) {
    pairs.push(`${node.key} : ${node.value}`)
  }
  for (let node of this.bucket) {
    while (node) {
      toPair(node)
      node = node.next
    }
  }
  return pairs
}
/* let table = new HashTable(30)
table.insert('Dane', 'dane@gmail.com')
table.insert('Andrew', 'andrew@gmail.com')
table.insert('Daen', 'daen@gmail.com')
table.insert('Dnae', 'Dnae@gmail.com')

table.insert('Andrew', 'future@gmail.com')
table.insert('Daen', 'EDITED DAEN')

console.log(table)
console.log(table.retrieveAll()) */
