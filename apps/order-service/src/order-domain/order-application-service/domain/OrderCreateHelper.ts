import { OrderDomainException, OrderDomainService } from "../../";
import { OrderRepository } from './ports/output/repository/OrderRepository';
import { CustomerRepository } from '@app/order-domain-core';
import { RestaurantRepository } from './ports/output/repository/RestaurantRepository';
import { OrderDataMapper } from './mapper/OrderDataMapper';
import { OrderCreatedEvent } from '@app/common';
import { Order } from '@app/order-domain-core';
import { CreateOrderCommand } from './dto/create/CreateOrderCommand';
import { UUID } from '@app/common';
import { Injectable } from "@nestjs/common";

@Injectable()
export class OrderCreateHelper {
  private readonly orderDomainService: OrderDomainService;
 
  private readonly orderRepository: OrderRepository;

  private readonly customerRepository: CustomerRepository;

  private readonly restaurantRepository: RestaurantRepository;

  private readonly orderDataMapper: OrderDataMapper;

  constructor(
    orderDomainService: OrderDomainService,
    orderRepository: OrderRepository,
    customerRepository: CustomerRepository,
    restaurantRepository: RestaurantRepository,
    orderDataMapper: OrderDataMapper,
  ) {
    this.customerRepository = customerRepository;
    this.orderDataMapper = orderDataMapper;
    this.orderDomainService = orderDomainService;
    this.orderRepository = orderRepository;
    this.restaurantRepository = restaurantRepository;
  }

  persistOrder(createOrderCommand: CreateOrderCommand): OrderCreatedEvent {
    this.checkCustomer(createOrderCommand.getCustomerId());
    const restaurant = this.checkRestaurant(createOrderCommand);
    const order =
      this.orderDataMapper.createOrderCommandToOrder(createOrderCommand);
    const orderCreatedEvent = this.orderDomainService.validateAndInitiateOrder(
      order,
      restaurant, 
    );
    this.saveOrder(order);
    console.info(
      `Order is created with id: ${orderCreatedEvent.getOrder().getId().getValue()}`,
    );
    return orderCreatedEvent;
  }

  private checkCustomer(customerId: UUID) {
    const customer = this.customerRepository.findCustomer(customerId);
    if (!customer) {
      console.warn(`Could not find customer with id ${customerId}`);
      throw new OrderDomainException(
        `Could not find customer with id ${customerId}`,
      );
    }
  }

  private checkRestaurant(createOrderCommand: CreateOrderCommand) {
    const restaurant =
      this.orderDataMapper.createOrderCommandToRestaurant(createOrderCommand);
    const optionalRestaurant =
      this.restaurantRepository.findRestaurantInformation(restaurant);
    if (!optionalRestaurant) {
      console.warn(
        `Could not find restaurant with id ${createOrderCommand.getRestaurantId()}`,
      );
      throw new OrderDomainException(
        `Could not find restaurant with id ${createOrderCommand.getRestaurantId()}`,
      );
    }
    return optionalRestaurant;
  }

  private saveOrder(order: Order): Order {
    const orderResult = this.orderRepository.save(order);
    if (!orderResult || orderResult === null) {
      console.error('Could not save order!');
      throw new OrderDomainException('Could not save order!');
    }
    console.info(`Order is saved with id: ${orderResult.getId().getValue()}`);
    return orderResult;
  }
}
