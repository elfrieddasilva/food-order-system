import { IsDefined, Length } from 'class-validator';

export class OrderAddress {
  constructor(street: string, postalCode: string, city: string) {
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
  }

  @IsDefined()
  @Length(2, 50)
  private readonly street: string;
  public getStreet(): string {
    return this.street;
  }
  @IsDefined()
  @Length(2, 10)
  private readonly postalCode: string;
  public getPostalCode(): string {
    return this.postalCode;
  }
  @IsDefined()
  @Length(2, 50)
  private readonly city: string;
  public getCity(): string {
    return this.city;
  }

  static builder() {
    return new Builder();
  }
}

class Builder {
  private _street: string;
  private _postalCode: string;
  private _city: string;

  street(val: string) {
    this._street = val;
    return this;
  }

  postalCode(val: string) {
    this._postalCode = val;
    return this;
  }

  city(val: string) {
    this._city = val;
    return this;
  }

  build() {
    return new OrderAddress(this._street, this._postalCode, this._city);
  }
}
