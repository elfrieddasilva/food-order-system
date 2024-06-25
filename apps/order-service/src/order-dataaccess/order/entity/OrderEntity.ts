import { OrderStatus, UUID } from '@app/common';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderAddressEntity } from './OrderAddressEntity';
import { OrderItemEntity } from './OrderItemEntity';

@Entity({ name: 'orders' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column('uuid')
  customerId: UUID;

  @Column('uuid')
  restaurantId: UUID;

  @Column('uuid')
  trackingId: UUID;

  @Column('float')
  price: number;

  @Column('enum', {
    enum: OrderStatus,
  })
  orderStatus: OrderStatus;

  @Column('simple-array')
  failureMessages: string[];

  @OneToOne(() => OrderAddressEntity, (address) => address.order, {
    cascade: true,
  })
  @JoinColumn()
  address: OrderAddressEntity;

  @OneToMany(() => OrderItemEntity, (items) => items.order, { cascade: true })
  items: OrderItemEntity[];

  public getId(): UUID {
    return this.id;
  }

  public getCustomerId(): UUID {
    return this.customerId;
  }

  public getRestaurantId(): UUID {
    return this.restaurantId;
  }

  public getTrackingId(): UUID {
    return this.trackingId;
  }

  public getPrice(): number {
    return this.price;
  }

  public getOrderStatus(): OrderStatus {
    return this.orderStatus;
  }

  public getFailureMessages(): string[] {
    return this.failureMessages;
  }

  public getAddress(): OrderAddressEntity {
    return this.address;
  }

  public getItems(): OrderItemEntity[] {
    return this.items;
  }

  public setId(id: UUID): void {
    this.id = id;
  }

  public setCustomerId(customerId: UUID): void {
    this.customerId = customerId;
  }

  public setRestaurantId(restaurantId: UUID): void {
    this.restaurantId = restaurantId;
  }

  public setTrackingId(trackingId: UUID): void {
    this.trackingId = trackingId;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public setOrderStatus(orderStatus: OrderStatus): void {
    this.orderStatus = orderStatus;
  }

  public setFailureMessages(failureMessages: string[]): void {
    this.failureMessages = failureMessages;
  }

  public setAddress(address: OrderAddressEntity): void {
    this.address = address;
  }

  public setItems(items: OrderItemEntity[]): void {
    this.items = items;
  }

  public static builder() {
    return new OrderEntityBuilder();
  }
}

class OrderEntityBuilder {
  private _id: UUID;
  private _customerId: UUID;
  private _restaurantId: UUID;
  private _trackingId: UUID;
  private _price: number;
  private _orderStatus: OrderStatus;
  private _failureMessages: string[];
  private _address: OrderAddressEntity;
  private _items: OrderItemEntity[];

  id(id: UUID): OrderEntityBuilder {
    this._id = id;
    return this;
  }

  customerId(customerId: UUID): OrderEntityBuilder {
    this._customerId = customerId;
    return this;
  }

  public restaurantId(restaurantId: UUID): OrderEntityBuilder {
    this._restaurantId = restaurantId;
    return this;
  }

  public trackingId(trackingId: UUID): OrderEntityBuilder {
    this._trackingId = trackingId;
    return this;
  }

  public price(price: number): OrderEntityBuilder {
    this._price = price;
    return this;
  }

  public orderStatus(orderStatus: OrderStatus): OrderEntityBuilder {
    this._orderStatus = orderStatus;
    return this;
  }

  public failureMessages(failureMessages: string[]): OrderEntityBuilder {
    this._failureMessages = failureMessages;
    return this;
  }

  public address(address: OrderAddressEntity): OrderEntityBuilder {
    this._address = address;
    return this;
  }

  public items(items: OrderItemEntity[]): OrderEntityBuilder {
    this._items = items;
    return this;
  }

  public build(): OrderEntity {
    const order = new OrderEntity();
    order.setId(this._id);
    order.setCustomerId(this._customerId);
    order.setRestaurantId(this._restaurantId);
    order.setTrackingId(this._trackingId);
    order.setPrice(this._price);
    order.setOrderStatus(this._orderStatus);
    order.setFailureMessages(this._failureMessages);
    order.setAddress(this._address);
    order.setItems(this._items);
    return order;
  }
}
