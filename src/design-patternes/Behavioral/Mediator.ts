/* eslint-disable no-console */

/**
 * Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects.
 * The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.
 */

interface IComponent {
  name: string
  chatroom?: IMediator
  sendedMessages: Array<string>
  receivedMessages: Array<string>
  sendMessage({ message, receiver }: { message: string; receiver: string }): void
}

interface IMediator {
  participants: Set<IComponent>
  addToChatroom(...participant: IComponent[]): void
  sendProxyMessage({ from, message, receiver }: { from: string; message: string; receiver: string }): void
}

export class Mediator implements IMediator {
  participants = new Set<IComponent>()

  addToChatroom(...participants: IComponent[]): void {
    participants.forEach((p) => {
      this.participants.add(p)
      p.chatroom = this
    })
  }

  sendProxyMessage({ from, message, receiver }: { from: string; message: string; receiver: string }): void {
    if (receiver === 'all') {
      const receiversComponents = [...this.participants].filter(p => p.name !== from)
      receiversComponents.forEach(r => r.receivedMessages.push(`From: ${from} - [${message}]`))
      return
    }

    const receiverComponent = [...this.participants].find(p => p.name === receiver)

    if (receiverComponent)
      receiverComponent.receivedMessages.push(`From: ${from} - [${message}]`)
  }
}

export class Component implements IComponent {
  chatroom?: IMediator
  sendedMessages: string[] = []
  receivedMessages: string[] = []

  constructor(public name: string) {}

  sendMessage({ message, receiver }: { message: string; receiver: string }): void {
    if (this.chatroom)
      this.chatroom.sendProxyMessage({ from: this.name, message, receiver })
  }

  addToChatroom(chatroom: IMediator): void {
    this.chatroom = chatroom
  }
}

const participantAndrew = new Component('Andrew')
const participantPetya = new Component('Petya')
const participantJonh = new Component('Jonh')

const chatroom = new Mediator()
chatroom.addToChatroom(participantAndrew, participantPetya, participantJonh)

participantAndrew.sendMessage({ message: 'Hello all', receiver: 'all' })
participantAndrew.sendMessage({ message: 'Hello Jonh', receiver: 'Jonh' })
participantJonh.sendMessage({ message: 'Hello Andrew', receiver: 'Andrew' })

chatroom.participants.forEach((p) => {
  console.log(`[Name]: ${p.name}`)
  console.log('\t[Received messages]:', p.receivedMessages)
  /*
  [Name]: Andrew
    [Received messages]: Array [ "From: Jonh - [Hello Andrew]" ]
  [Name]: Petya
    [Received messages]: Array [ "From: Andrew - [Hello all]" ]
  [Name]: Jonh
    [Received messages]: Array [ "From: Andrew - [Hello all]", "From: Andrew - [Hello Jonh]" ]
  */
})
