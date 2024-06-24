import { AggregateRoot } from '@app/common';
import {
  CustomerId,
  Money,
  OrderId,
  OrderStatus,
  RestaurantId,
} from '@app/common';
import { OrderItemId, StreetAddress, TrackingId } from '../valueObject';
import { OrderItem } from './OrderItem';
import { OrderDomainException } from '../exception/OrderDomainException';
import { generateUUID } from '@app/common';

export class Order extends AggregateRoot<OrderId> {
  private readonly customerId: CustomerId;
  private readonly restaurantId: RestaurantId;
  private readonly deliveryAddress: StreetAddress;
  private readonly price: Money;
  private readonly items: OrderItem[];

  private trackingId: TrackingId;
  private orderStatus: OrderStatus;
  private failureMessages: string[];

  public static readonly FAILURE_MESSAGE_DELIMITER = ",";

  constructor(
    orderId: OrderId,
    customerId: CustomerId,
    restaurantId: RestaurantId,
    deliveryAdress: StreetAddress,
    price: Money,
    items: OrderItem[],
    trackingId: TrackingId,
    orderStatus: OrderStatus,
    failureMessages: string[],
  ) {
    super();
    super.setId(orderId);
    this.customerId = customerId;
    this.restaurantId = restaurantId;
    this.deliveryAddress = deliveryAdress;
    this.price = price;
    this.items = items;
    this.trackingId = trackingId;
    this.orderStatus = orderStatus;
    this.failureMessages = failureMessages;
  }

  public static builder(): Builder {
    return new Builder();
  }

  initializeOrder() {
    this.setId(new OrderId(generateUUID()));
    this.trackingId = new TrackingId(generateUUID());
    this.orderStatus = OrderStatus.PENDING;
    this.initializeOrderItems();
  }

  validateOrder() {
    this.validateInitialOrder();
    this.validateTotalPrice();
    this.validateItemsPrice();
  }

  pay() {
    if (this.orderStatus !== OrderStatus.PENDING) {
      throw new OrderDomainException(
        'Order is not in correct state for pay operation!',
      );
    }
    this.orderStatus = OrderStatus.PAID;
  }

  approve() {
    if (this.orderStatus !== OrderStatus.PAID) {
      throw new OrderDomainException(
        'Order is not in correct state for approve operation!',
      );
    }
    this.orderStatus = OrderStatus.APPROVED;
  }

  initCancel(failureMessages: string[]) {
    if (this.orderStatus !== OrderStatus.PAID) {
      throw new OrderDomainException(
        'Order is not in correct state for initCancel operation!',
      );
    }
    this.orderStatus = OrderStatus.CANCELLING;
    this.updateFailureMessages(failureMessages);
  }

  cancel(failureMessages: string[]) {
    if (
      !(
        this.orderStatus === OrderStatus.CANCELLING ||
        this.orderStatus === OrderStatus.PENDING
      )
    ) {
      throw new OrderDomainException(
        'Order is not in correct state for cancel operation!',
      );
    }
    this.orderStatus = OrderStatus.CANCELLED;
    this.updateFailureMessages(failureMessages);
  }

  private updateFailureMessages(failureMessages: string[]) {
    if (this.failureMessages && failureMessages) {
      this.failureMessages = this.failureMessages.concat(
        failureMessages.filter((message) => message.trim().length !== 0),
      );
    }
    if (this.failureMessages === undefined) {
      this.failureMessages = failureMessages;
    }
  }

  private validateInitialOrder(): void {
    if (this.orderStatus || this.getId()) {
      throw new OrderDomainException(
        'Order is not in correct state for initialization!',
      );
    }
  }

  private validateTotalPrice(): void {
    if (!this.price || !this.price.isGreaterThanZero()) {
      throw new OrderDomainException('Total price must be greater than zero!');
    }
  }

  private validateItemsPrice(): void {
    const orderItemsTotal = this.items
      .map((orderItem) => {
        this.validateItemPrice(orderItem);
        return orderItem.getSubTotal();
      })
      .reduce((acc, money) => acc.add(money), Money.ZERO);

    if (!(this.price.getAmount() === orderItemsTotal.getAmount())) {
      throw new OrderDomainException(
        `Total price: ${this.price.getAmount()} is not equal to Order items total: ${orderItemsTotal.getAmount()}!`,
      );
    }
  }

  private validateItemPrice(orderItem: OrderItem): void {
    if (!orderItem.isPriceValid()) {
      throw new OrderDomainException(
        `Order item price: ${orderItem.getPrice().getAmount()} is not valid for product ${orderItem.getProduct().getId().getValue()}`,
      );
    }
  }

  private initializeOrderItems() {
    let itemId = 1;
    this.items.forEach((orderItem) => {
      orderItem.initializeOrderItem(this.getId(), new OrderItemId((itemId++).toString()));
    });
  }

  getCustomerId() {
    return this.customerId;
  }

  getRestaurantId() {
    return this.restaurantId;
  }

  getDeliveryAddress() {
    return this.deliveryAddress;
  }

  getPrice() {
    return this.price;
  }

  getItems() {
    return this.items;
  }

  getTrackingId() {
    return this.trackingId;
  }

  getOrderStatus() {
    return this.orderStatus;
  }

  getFailureMessages() {
    return this.failureMessages;
  }
}

class Builder {
  private _orderId: OrderId;
  private _customerId: CustomerId;
  private _restaurantId: RestaurantId;
  private _deliveryAdress: StreetAddress;
  private _price: Money;
  private _items: OrderItem[];
  private _trackingId: TrackingId;
  private _orderStatus: OrderStatus;
  private _failureMessages: string[];

  orderId(val: OrderId) {
    this._orderId = val;
    return this;
  }

  customerId(val: CustomerId) {
    this._customerId = val;
    return this;
  }

  restaurantId(val: RestaurantId) {
    this._restaurantId = val;
    return this;
  }

  deliveryAddress(val: StreetAddress) {
    this._deliveryAdress = val;
    return this;
  }

  price(val: Money) {
    this._price = val;
    return this;
  }

  items(val: OrderItem[]) {
    this._items = val;
    return this;
  }

  trackingId(val: TrackingId) {
    this._trackingId = val;
    return this;
  }

  orderStatus(val: OrderStatus) {
    this._orderStatus = val;
    return this;
  }

  failureMessages(val: string[]) {
    this._failureMessages = val;
    return this;
  }

  build(): Order {
    return new Order(
      this._orderId,
      this._customerId,
      this._restaurantId,
      this._deliveryAdress,
      this._price,
      this._items,
      this._trackingId,
      this._orderStatus,
      this._failureMessages,
    );
  }
}
