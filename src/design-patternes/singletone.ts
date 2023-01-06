/* eslint-disable no-console */

/**
 * Singleton is a creational design pattern that lets you ensure that a class has only one instance,
 * while providing a global access point to this instance.
 */
export class Singletone {
  static singletoneInstance: Singletone | null = null
  value = 0

  constructor() {
    if (!Singletone.singletoneInstance)
      Singletone.singletoneInstance = this

    return Singletone.singletoneInstance
  }

  add(sumNumber: number) {
    this.value += sumNumber
  }
}

const store1 = new Singletone()
store1.add(3) // store1.value === 3
console.log(store1.value)

const store2 = new Singletone()
store2.add(3) // store1.value === 6
console.log(store1.value)

