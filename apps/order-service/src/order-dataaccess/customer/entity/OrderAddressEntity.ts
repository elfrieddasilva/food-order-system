import { UUID } from '@app/common';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderEntity } from './OrderEntity';

@Entity({ name: 'order_address' })
export class OrderAddressEntity {
  @PrimaryGeneratedColumn()
  id: UUID;

  @OneToOne(() => OrderEntity, (order) => order.address, {
    cascade: true,
  })
  @JoinColumn({ name: 'ORDER_ID' })
  order: OrderEntity;

  @Column()
  street: string;

  @Column()
  postalCode: string;

  @Column()
  city: string;

  public getId(): UUID {
    return this.id;
  }

  public getOrder(): OrderEntity {
    return this.order;
  }

  public getStreet(): string {
    return this.street;
  }

  public getPostalCode(): string {
    return this.postalCode;
  }

  public getCity(): string {
    return this.city;
  }

  public setId(id: UUID): void {
    this.id = id;
  }

  public setOrder(order: OrderEntity): void {
    this.order = order;
  }

  public setStreet(street: string): void {
    this.street = street;
  }

  public setPostalCode(postalCode: string): void {
    this.postalCode = postalCode;
  }

  public setCity(city: string): void {
    this.city = city;
  }

  public static builder() {
    return new OrderAddressEntityBuilder();
  }
}

class OrderAddressEntityBuilder {
  private _id: UUID;
  private _order: OrderEntity;
  private _street: string;
  private _postalCode: string;
  private _city: string;

  public id(id: UUID): OrderAddressEntityBuilder {
    this._id = id;
    return this;
  }

  public order(order: OrderEntity): OrderAddressEntityBuilder {
    this._order = order;
    return this;
  }

  public street(street: string): OrderAddressEntityBuilder {
    this._street = street;
    return this;
  }

  public postalCode(postalCode: string): OrderAddressEntityBuilder {
    this._postalCode = postalCode;
    return this;
  }

  public city(city: string): OrderAddressEntityBuilder {
    this._city = city;
    return this;
  }

  public build(): OrderAddressEntity {
    const orderAddress = new OrderAddressEntity();
    orderAddress.setId(this._id);
    orderAddress.setOrder(this._order);
    orderAddress.setStreet(this._street);
    orderAddress.setPostalCode(this._postalCode);
    orderAddress.setCity(this._city);
    return orderAddress;
  }
}
