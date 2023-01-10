/* eslint-disable no-console */
/**
 * Command is a behavioral design pattern that turns a request into a
 * stand-alone object that contains all information about the request.
 * This transformation lets you pass requests as a method arguments,
 * delay or queue a request’s execution, and support undoable operations.
 */

interface ICommand {
  execute(): void
}

export class Invoker {
  onStart?: ICommand
  onFinish?: ICommand

  setOnStart(onStart: ICommand) {
    this.onStart = onStart
  }

  setOnFinish(onFinish: ICommand) {
    this.onFinish = onFinish
  }

  doSomeAction() {
    if (this.onStart)
      this.onStart.execute()

    if (this.onFinish)
      this.onFinish.execute()
  }
}

export class StartCommand implements ICommand {
  execute(): void {
    console.log('Start...')
  }
}

export class FinishCommand implements ICommand {
  execute(): void {
    console.log('Finish...')
  }
}

const invoker = new Invoker()

invoker.setOnStart(new StartCommand())
invoker.setOnFinish(new FinishCommand())

invoker.doSomeAction()
