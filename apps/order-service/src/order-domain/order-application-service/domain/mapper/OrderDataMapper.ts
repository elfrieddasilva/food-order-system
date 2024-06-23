
import { CreateOrderCommand } from '../dto/create/CreateOrderCommand';
import {
  CustomerId,
  Money,
  ProductId,
  RestaurantId,
} from '@app/common';
import { Order, StreetAddress, Restaurant, Product, OrderItem as OrderItemEntity  } from '../../../';
import { generateUUID } from '@app/common'; 
import { OrderAddress } from '../dto/create/OrderAddress';
import { OrderItemApp } from '../dto/create/OrderItem';
import { CreateOrderResponse } from '../dto/create/CreateOrderResponse';
import { TrackOrderResponse } from '../dto/track/TrackOrderResponse';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderDataMapper {
  createOrderCommandToRestaurant(
    createOrderCommand: CreateOrderCommand,
  ): Restaurant {
    return Restaurant.builder()
      .restaurantId(new RestaurantId(createOrderCommand.getRestaurantId()))
      .products(
        createOrderCommand
          .getItems()
          .map(
            (orderItem) => new Product(new ProductId(orderItem.getProductId())),
          ),
      )
      .build();
  }

  createOrderCommandToOrder(createOrderCommand: CreateOrderCommand): Order {
    return Order.builder()
      .customerId(new CustomerId(createOrderCommand.getCustomerId()))
      .restaurantId(new RestaurantId(createOrderCommand.getRestaurantId()))
      .deliveryAddress(
        this.orderAddressToStreetAddress(createOrderCommand.getAddress()),
      )
      .price(new Money(createOrderCommand.getPrice()))
      .items(this.orderItemsToOrderItemEntities(createOrderCommand.getItems()))
      .build();
  }

  orderToCreateOrderResponse(order: Order, message: string) {
    return CreateOrderResponse.builder()
      .orderTrackingId(order.getTrackingId().getValue())
      .orderStatus(order.getOrderStatus())
      .message(message)
      .build();
  }

  private orderAddressToStreetAddress(orderAddress: OrderAddress) {
    return new StreetAddress(
      generateUUID(),
      orderAddress.getStreet(),
      orderAddress.getPostalCode(),
      orderAddress.getCity(),
    );
  }

   orderToTrackOrderResponse(order: Order): TrackOrderResponse {
    return TrackOrderResponse.builder()
      .orderTrackingId(order.getTrackingId().getValue())
      .orderStatus(order.getOrderStatus())
      .failureMessages(order.getFailureMessages())
      .build();
  }

  private orderItemsToOrderItemEntities(
    orderItems: OrderItemApp[],
  ): OrderItemEntity[] {
    return orderItems.map((orderItem) =>
      OrderItemEntity.builder()
        .product(new Product(new ProductId(orderItem.getProductId())))
        .price(new Money(orderItem.getPrice()))
        .quantity(orderItem.getQuantity())
        .subTotal(new Money(orderItem.getSubTotal()))
        .build(),
    );
  }
}
