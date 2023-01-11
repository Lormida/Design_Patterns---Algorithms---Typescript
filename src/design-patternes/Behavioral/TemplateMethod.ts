/* eslint-disable no-console */

/**
 * Template Method is a behavioral design pattern that defines
 * the skeleton of an algorithm in the superclass but lets subclasses
 * override specific steps of the algorithm without changing its structure.
 */

export abstract class TemplateClass {
  runAlgorithm() {
    this.stepOneStatic()
    this.stepTwoDynamic()
    this.stepThreeStatic()
  }

  stepOneStatic() {
    console.log('[Static]: step 1')
  }

  abstract stepTwoDynamic(): void

  stepThreeStatic() {
    console.log('[Static]: step 3')
  }
}

export class ConcreteTemplateClassImpl extends TemplateClass {
  stepTwoDynamic() {
    console.log('[Dynamic]: custom implementation step 2')
  }
}

const concreteAlgorithm = new ConcreteTemplateClassImpl()
concreteAlgorithm.runAlgorithm()

