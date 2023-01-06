/* eslint-disable no-console */

/**
 * Observer is a behavioral design pattern that lets you define a subscription mechanism to notify
 * multiple objects about any events that happen to the object they’re observing.
 */
interface ISubject {
  subscribers: Set<Subscriber>
  state: string
  doBusinessLogic(): void
  notifySubsribers(): void
  attach(subscriber: Subscriber): void
  detach(subscriber: Subscriber): void
}

interface ISubscriber {
  name: string
  update(subject: Subject): void
}

export class Subject implements ISubject {
  subscribers = new Set<Subscriber>()
  state = 'nothing interesting'

  doBusinessLogic() {
    this.state = String(Math.random() * 100)
    this.notifySubsribers()
  }

  notifySubsribers() {
    this.subscribers.forEach(user => user.update(this))
  }

  attach(subscriber: Subscriber) {
    this.subscribers.add(subscriber)
  }

  detach(subscriber: Subscriber) {
    this.subscribers.delete(subscriber)
  }
}

export class Subscriber implements ISubscriber {
  constructor(public name: string) {}
  update(subject: Subject) {
    console.log(`${this.name} get info: ${subject.state}`)
  }
}

const user1 = new Subscriber('Andrew')
const user2 = new Subscriber('Vasya')

const newYorkTimes = new Subject()

newYorkTimes.attach(user1)
newYorkTimes.attach(user2)

newYorkTimes.doBusinessLogic()
