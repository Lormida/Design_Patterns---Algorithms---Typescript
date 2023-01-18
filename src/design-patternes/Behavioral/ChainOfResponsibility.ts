/* eslint-disable no-console */
export {}

interface IHandler {
  nextHandler?: IHandler
  handle(data: string): void
  setNext(handler: IHandler): IHandler
}

export abstract class AbstractHandler implements IHandler {
  pieceOfFood?: string
  animal?: string

  nextHandler?: IHandler

  handle(pieceOfFood: string) {
    if (pieceOfFood === this.pieceOfFood)
      console.log(`[${this.animal}] wants ${pieceOfFood}`)
    else if (this.nextHandler)
      this.nextHandler.handle(pieceOfFood)
    else
      console.log('It\'s end of the chain')
  }

  setNext(nextHandler: IHandler) {
    this.nextHandler = nextHandler
    return nextHandler
  }
}

export class MonkeyHandler extends AbstractHandler {
  constructor() {
    super()
  }

  pieceOfFood = 'banana'
  animal = 'Monkey'
}

export class SquirrelHandler extends AbstractHandler {
  pieceOfFood = 'nut'
  animal = 'Squirrel'

  constructor() {
    super()
  }
}

export class DogHandler extends AbstractHandler {
  pieceOfFood = 'meat'
  animal = 'Dog'

  constructor() {
    super()
  }
}

export function clientCode(handler: IHandler) {
  const food = ['nut', 'meat', 'banana']

  food.forEach((pieceOfFood) => {
    console.log(`Client: who wants ${pieceOfFood}?`)

    handler.handle(pieceOfFood)
  })
}

const monkey = new MonkeyHandler()
const squirrel = new SquirrelHandler()
const dog = new DogHandler()

/**
 * Monkey > Squirrel > Dog (chain)
 */
monkey
  .setNext(squirrel)
  .setNext(dog)

/**
 * Call chain
 */
clientCode(monkey)

/**
 * Client: Who wants a Nut?
 * Squirrel: I'll eat the Nut.
 * Client: Who wants a Banana?
 * Monkey: I'll eat the Banana.
 * Client: Who wants a Cup of coffee?
 * Cup of coffee was left untouched.
 */
