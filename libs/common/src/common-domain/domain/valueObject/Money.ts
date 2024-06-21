export class Money {
  private amount: number;

  public static readonly ZERO = new Money(0);

  constructor(amount: number) {
    this.amount = amount;
  }

  getAmount(): number {
    return this.amount;
  }

  isGreaterThanZero() {
    return this.amount > 0;
  }

  isGreaterThan(money: Money) {
    return this.amount > money.getAmount()
  }

  add(money: Money) {
    return new Money(this.setScale(this.amount + money.getAmount()))
  }

  substract(money: Money) {
    return new Money(this.setScale(this.amount - money.getAmount()))
  }

  multiply(multiplier: number) {
    return new Money(this.setScale(this.amount * multiplier));
  }

  private setScale(input: number) {
    return Number(input.toFixed(2));
  }

}
