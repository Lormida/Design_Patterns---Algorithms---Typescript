/* eslint-disable curly */
export {}

interface Iterator<T> {
  position: number
  current: () => T
  getItems: () => T[]
  isEnd: boolean
  next: () => T
  prev: () => T
  refresh: () => void
}

export class ArrayIterator<T> implements Iterator<T> {
  position = 0
  constructor(public collection: T[]) {}

  current = () => this.getItems()[this.position]
  getItems = () => this.collection

  get isEnd() {
    return this.position === this.collection.length - 1
  }

  next = () => {
    if (this.position < this.collection.length - 1) {
      this.position++
    }

    return this.current()
  }

  prev = () => {
    if (this.position > 0) {
      this.position--
    }

    return this.current()
  }

  refresh = () => {
    this.position = 0
  }
}

export class ArrayCollection<T> {
  constructor(public items: T[]) {}
  getIterator() {
    return new ArrayIterator(this.items)
  }
}

const arrayCollection = new ArrayCollection([1, 2, 3, 4, 5])
const arrayIterator = arrayCollection.getIterator()

console.log(arrayIterator.current())
while (!arrayIterator.isEnd) {
  console.log(arrayIterator.next())
}

