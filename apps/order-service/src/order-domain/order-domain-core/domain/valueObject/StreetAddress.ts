import { UUID } from '@app/common';

export class StreetAddress {
  private readonly id: UUID;
  private readonly street: string;
  private readonly postalCode: string;
  private readonly city: string;
  constructor(id: UUID, street: string, postalCode: string, city: string) {
    this.id = id;
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
  }

  getId() {
    return this.id;
  }

  getStreet() {
    return this.street;
  }

  getPostalCode() {
    return this.postalCode;
  }

  getCity() {
    return this.city;
  }
}
