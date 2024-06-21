import { OrderCancelledEvent } from '@app/common';
import { OrderCreatedEvent } from '@app/common';
import { OrderPaidEvent } from '@app/common';
import { OrderDomainService } from './OrderDomainService';
import { Order } from './entity/Order';
import { Restaurant } from './entity/Restaurant';
import { OrderDomainException } from './exception/OrderDomainException';

export class OrderDomainServiceImpl implements OrderDomainService {
  validateAndInitiateOrder(
    order: Order,
    restaurant: Restaurant,
  ): OrderCreatedEvent {
    this.validateRestaurant(restaurant);
    this.setOrderProductInformation(order, restaurant);
    order.validateOrder();
    order.initializeOrder();
    console.info(`Order with id: ${order.getId().getValue()}`);
    return new OrderCreatedEvent(order, new Date());
  }
  payOrder(order: Order): OrderPaidEvent {
    order.pay();
    console.info(`Order with id: ${order.getId().getValue()} is paid`);
    return new OrderPaidEvent(order, new Date());
  }
  approveOrder(order: Order): void {
    order.approve();
    console.info(`Order with id: ${order.getId().getValue()} is approved`);
  }
  cancelOrderPayment(
    order: Order,
    failureMessages: string[],
  ): OrderCancelledEvent {
    order.initCancel(failureMessages);
    console.info(
      `Order payment is cancelling for order id: ${order.getId().getValue()}`,
    );
    return new OrderCancelledEvent(order, new Date());
  }
  cancelOrder(order: Order, failureMessages: string[]): void {
    order.cancel(failureMessages);
    console.info(
      `Order with id: ${order.getId().getValue()} is cancelled`,
    );
  }

  private validateRestaurant(restaurant: Restaurant) {
    if (!restaurant.isActive()) {
      throw new OrderDomainException(
        `Restaurant with id ${restaurant.getId().getValue()} is currently not active!`,
      );
    }
  }

  private setOrderProductInformation(order: Order, restaurant: Restaurant) {
    order.getItems().forEach((orderItem) =>
      restaurant.getProducts().forEach((restaurantProduct) => {
        const currentProduct = orderItem.getProduct();
        if (currentProduct.getId().getValue() === restaurantProduct.getId().getValue()) {
          currentProduct.updateWithConfirmedNamePrice(
            restaurantProduct.getName(),
            restaurantProduct.getPrice(),
          );
        }
      }),
    );
  }
}
