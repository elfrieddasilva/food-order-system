import {
  Order,
  OrderItem,
  OrderItemId,
  Product,
  StreetAddress,
  TrackingId,
} from '@app/order-domain';
import { OrderEntity } from '../entity/OrderEntity';
import { OrderAddressEntity } from '../entity/OrderAddressEntity';
import { OrderItemEntity } from '../entity/OrderItemEntity';
import {
  CustomerId,
  Money,
  OrderId,
  ProductId,
  RestaurantId,
} from '@app/common';

export class OrderDataAccessMapper {
  orderToOrderEntity(order: Order): OrderEntity {
    const orderEntity = OrderEntity.builder()
      .id(order.getId().getValue())
      .customerId(order.getCustomerId().getValue())
      .restaurantId(order.getRestaurantId().getValue())
      .trackingId(order.getTrackingId().getValue())
      .address(this.deliveryAddressToAddressEntity(order.getDeliveryAddress()))
      .price(order.getPrice().getAmount())
      .items(this.orderItemsToOrderItemEntities(order.getItems()))
      .build();
    orderEntity.getAddress().setOrder(orderEntity);
    orderEntity
      .getItems()
      .forEach((orderItem) => orderItem.setOrder(orderEntity));

    return orderEntity;
  }

  orderEntityToOrder(orderEntity: OrderEntity): Order {
    return Order.builder()
      .orderId(new OrderId(orderEntity.getId()))
      .customerId(new CustomerId(orderEntity.getCustomerId()))
      .restaurantId(new RestaurantId(orderEntity.getRestaurantId()))
      .deliveryAddress(
        this.addressEntityToDeliveryAddress(orderEntity.getAddress()),
      )
      .price(new Money(orderEntity.getPrice()))
      .items(this.orderItemEntitiesToOrderItems(orderEntity.getItems()))
      .trackingId(new TrackingId(orderEntity.getTrackingId()))
      .orderStatus(orderEntity.getOrderStatus())
      .failureMessages(orderEntity.getFailureMessages())
      .build();
  }

  private orderItemEntitiesToOrderItems(items: OrderItemEntity[]) {
    return items.map((orderItemEntity) =>
      OrderItem.builder()
        .orderItemId(new OrderItemId(orderItemEntity.getId()))
        .product(new Product(new ProductId(orderItemEntity.getProductId())))
        .price(new Money(orderItemEntity.getPrice()))
        .quantity(orderItemEntity.getQuantity())
        .subTotal(new Money(orderItemEntity.getSubTotal()))
        .build(),
    );
  }

  private addressEntityToDeliveryAddress(address: OrderAddressEntity) {
    return new StreetAddress(
      address.getId(),
      address.getStreet(),
      address.getPostalCode(),
      address.getCity(),
    );
  }

  private orderItemsToOrderItemEntities(items: OrderItem[]) {
    return items.map((orderItem) =>
      OrderItemEntity.builder()
        .id(orderItem.getId().getValue())
        .productId(orderItem.getProduct().getId().getValue())
        .price(orderItem.getPrice().getAmount())
        .quantity(orderItem.getQuantity())
        .subTotal(orderItem.getSubTotal().getAmount())
        .build(),
    );
  }

  private deliveryAddressToAddressEntity(deliveryAddress: StreetAddress) {
    return OrderAddressEntity.builder()
      .id(deliveryAddress.getId())
      .street(deliveryAddress.getStreet())
      .postalCode(deliveryAddress.getPostalCode())
      .city(deliveryAddress.getCity())
      .build();
  }
}
