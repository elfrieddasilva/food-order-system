import { UUID } from '@app/common';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'order_customer_m_view', schema: 'customer' })
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: UUID;

  public getId(): UUID {
    return this.id;
  }

  public setId(id: UUID): void {
    this.id = id;
  }

  static builder(): CustomerEntityBuilder {
    return new CustomerEntityBuilder();
  }
}

class CustomerEntityBuilder {
  private _id: UUID;

  public id(id: UUID): this {
    this._id = id;
    return this;
  }

  public build(): CustomerEntity {
    const customer = new CustomerEntity();
    customer.setId(this._id);
    return customer;
  }
}
