/**
 * The Facade class provides a simple interface to the complex logic of one or
 * several subsystems. The Facade delegates the client requests to the
 * appropriate objects within the subsystem. The Facade is also responsible for
 * managing their lifecycle. All of this shields the client from the undesired
 * complexity of the subsystem.
 */

export class UnicodeConverter {
  convertStringToUnicode(phrase: string) {
    return phrase.split('').map(symbol => symbol.charCodeAt(0)).join(' ')
  }
}

export class CaseConverter {
  convertToUpperCase(phrase: string) {
    return phrase.toUpperCase()
  }

  convertToSnakeCase(phrase: string) {
    return phrase.split(' ').join('_')
  }
}

export class StringConverter {
  protected unicodeConverter = new UnicodeConverter()
  protected caseConverter = new CaseConverter()

  convertToUpperCaseUnicode(phrase: string) {
    const snakeString = this.caseConverter.convertToSnakeCase(phrase)
    const upperSnakeString = this.caseConverter.convertToUpperCase(snakeString) // HELLO_GUYS!
    const unicodeUpperCaseString = this.unicodeConverter.convertStringToUnicode(upperSnakeString) // 43 11 34 ..

    return unicodeUpperCaseString
  }
}

const stringConverter = new StringConverter()

console.log(stringConverter.convertToUpperCaseUnicode('hello guys!'))
