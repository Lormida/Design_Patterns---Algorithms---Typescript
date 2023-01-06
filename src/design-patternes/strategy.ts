type TFuncStrategy = (sum: number) => number

export const noneDiscount: TFuncStrategy = sum => sum
export const baseDiscount: TFuncStrategy = sum => sum * 0.9
export const eliteDiscount: TFuncStrategy = sum => sum * 0.6

export class BaseUser {
  constructor(private strategyDiscount: TFuncStrategy) {}

  getResultSum(sum: number) {
    return this.strategyDiscount(sum)
  }
}

const lameUser = new BaseUser(noneDiscount)
const baseUser = new BaseUser(baseDiscount)
const eliteUser = new BaseUser(eliteDiscount)

const sums = [lameUser, baseUser, eliteUser].map(user => user.getResultSum(100)) // 100, 90, 60
