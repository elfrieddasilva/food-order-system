import { OrderDomainException, OrderDomainService } from '../../';
import { OrderRepository } from './ports/output/repository/OrderRepository';
import { CustomerRepository, Restaurant } from '../../';
import { RestaurantRepository } from './ports/output/repository/RestaurantRepository';
import { OrderDataMapper } from './mapper/OrderDataMapper';
import { OrderCreatedEvent } from '@app/common';
import { Order } from '../../';
import { CreateOrderCommand } from './dto/create/CreateOrderCommand';
import { UUID } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class OrderCreateHelper {
  private readonly orderDomainService: OrderDomainService;

  private readonly orderRepository: OrderRepository;

  private readonly customerRepository: CustomerRepository;

  private readonly restaurantRepository: RestaurantRepository;

  private readonly orderDataMapper: OrderDataMapper;

  private logger = new Logger(OrderCreateHelper.name);

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

  async persistOrder(createOrderCommand: CreateOrderCommand): Promise<OrderCreatedEvent> {
    try {
      await this.checkCustomer(createOrderCommand.getCustomerId());
      const restaurant = await this.checkRestaurant(createOrderCommand);
      const order =
        this.orderDataMapper.createOrderCommandToOrder(createOrderCommand);
      const orderCreatedEvent = this.orderDomainService.validateAndInitiateOrder(
        order,
        restaurant,
      );
      await this.saveOrder(order);
      this.logger.log(
        `Order is created with id: ${orderCreatedEvent.getOrder().getId().getValue()}`,
      );
      return orderCreatedEvent;
      
    } catch (error) {
      throw error;
    }
  }

  private async checkCustomer(customerId: UUID) {
    try {
      await this.customerRepository.findCustomer(customerId);
    } catch (error) {
      this.logger.warn(`Could not find customer with id ${customerId}`);
      throw new OrderDomainException(
        `Could not find customer with id ${customerId}`,
      );
    }
  }

  private async checkRestaurant(createOrderCommand: CreateOrderCommand): Promise<Restaurant> {
    const restaurant =
      this.orderDataMapper.createOrderCommandToRestaurant(createOrderCommand);
    try {
      const optionalRestaurant =
        await this.restaurantRepository.findRestaurantInformation(restaurant);
      if (!optionalRestaurant) {
        this.logger.warn(
          `Could not find restaurant with id ${createOrderCommand.getRestaurantId()}`,
        );
        throw new OrderDomainException(
          `Could not find restaurant with id ${createOrderCommand.getRestaurantId()}`,
        );
      }
      return optionalRestaurant;
    } catch (error) {
      throw error;
    }
  }

  private async saveOrder(order: Order) {
    try {
      const orderResult = await this.orderRepository.save(order);
      if (!orderResult) {
        this.logger.error('Could not save order!');
        throw new OrderDomainException('Could not save order!');
      }
      this.logger.log(
        `Order is saved with id: ${orderResult.getId().getValue()}`,
      );
      return orderResult;
    } catch (error) {
      throw error;
    }
  }
}
