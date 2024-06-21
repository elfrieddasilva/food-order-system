export abstract class BaseId<T> {
  private readonly value: T;

  protected constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}
