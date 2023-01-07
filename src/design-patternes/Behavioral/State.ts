/* eslint-disable no-console */
interface IState {
  context: IContext
  clickBack(): void
  clickNext(): void
  clickLeftBtn(): void
  clickRightBtn(): void
}

interface IContext {
  state: IState
  changeState(state: IState): void
}

export class ATMContext implements IContext {
  state: IState

  constructor() {
    this.state = new LanguageState(this)
  }

  changeState(state: IState) {
    this.state = state
  }
}

export class LanguageState implements IState {
  constructor(public context: IContext) {}

  clickBack() {
    console.log('Exit!')
  }

  clickNext() {
    this.context.changeState(new PaymentOperationState(this.context))
  }

  clickLeftBtn() {
    console.log('you choose russian language')
  }

  clickRightBtn() {
    console.log('you choose english language')
  }
}

export class PaymentOperationState implements IState {
  constructor(public context: IContext) {}
  clickNext() {
    console.log('You can\'t do this! It\'s last screen')
  }

  clickBack() {
    this.context.changeState(new LanguageState(this.context))
  }

  clickLeftBtn() {
    console.log('you choose to withdraw money')
  }

  clickRightBtn() {
    console.log('you choose to top up money')
  }
}

const defaultATM = new ATMContext()

defaultATM.state.clickLeftBtn()
defaultATM.state.clickRightBtn()

defaultATM.state.clickNext()

defaultATM.state.clickLeftBtn()
defaultATM.state.clickRightBtn()
