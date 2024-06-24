import {
  CustomerId,
  Money,
  OrderId,
  OrderStatus,
  ProductId,
  RestaurantId,
} from '@app/common';
import {
  CreateOrderCommand,
  OrderAddress,
  OrderApplicationService,
  OrderApplicationServiceImpl,
  OrderCreateCommandHandler,
  OrderCreateHelper,
  OrderDataMapper,
  OrderItemApp as OrderItem,
  OrderRepository,
  OrderTrackCommandHandler,
  RestaurantRepository,
} from '../domain';

import {
  Customer,
  CustomerRepository,
  OrderCancelledPaymentRequestMessagePublisher,
  OrderCreatedPaymentRequestMessagePublisher,
  OrderDomainException,
  OrderDomainService,
  OrderDomainServiceImpl,
  OrderPaidRestaurantRequestMessagePublisher,
  Product,
  Restaurant,
} from '../../';

describe('OrderApplicationService Test', () => {
  const CUSTOMER_ID = '60815702-4d08-4fd3-be07-cd88c8b53106';
  const RESTAURANT_ID = '8293a98f-3973-4cd9-8503-ded581890208';
  const PRODUCT_ID = 'e3464055-e2c7-42fe-ae50-912f93799231';
  const ORDER_ID = 'a0c065c3-98e1-437e-861d-07a1807d9b21';
  const PRICE = 200;

  let orderDataMapper: OrderDataMapper;
  let orderApplicationService: OrderApplicationService;
  let orderCreatedPaymentRequestMessagePublisher: OrderCreatedPaymentRequestMessagePublisher =
    {
      publish: jest.fn(),
    };

  let orderCancelledPaymentRequestMessagePublisher: OrderCancelledPaymentRequestMessagePublisher =
    {
      publish: jest.fn(),
    };

  let orderPaidRestaurantRequestMessagePublisher: OrderPaidRestaurantRequestMessagePublisher =
    {
      publish: jest.fn(),
    };

  let customerRepository: CustomerRepository = {
    findCustomer: jest.fn(),
  };

  let restaurantRepository: RestaurantRepository = {
    findRestaurantInformation: jest.fn(),
  };

  let orderRepository: OrderRepository = {
    save: jest.fn(),
    findByTrackingId: jest.fn(),
  };

  let orderDomainService: OrderDomainService;

  let orderCreateHelper: OrderCreateHelper;

  let createOrderCommand: CreateOrderCommand;
  let createOrderCommandWrongPrice: CreateOrderCommand;
  let createOrderCommandWrongProductPrice: CreateOrderCommand;
  let orderCreateCommandHandler: OrderCreateCommandHandler;
  let orderTrackCommandHandler: OrderTrackCommandHandler;

  beforeAll(() => {
    orderDataMapper = new OrderDataMapper();
    orderDomainService = new OrderDomainServiceImpl();
    orderCreateHelper = new OrderCreateHelper(
      orderDomainService,
      orderRepository,
      customerRepository,
      restaurantRepository,
      orderDataMapper,
    );

    orderCreateCommandHandler = new OrderCreateCommandHandler(
      orderCreateHelper,
      orderDataMapper,
      orderCreatedPaymentRequestMessagePublisher,
    );

    orderTrackCommandHandler = new OrderTrackCommandHandler(
      orderDataMapper,
      orderRepository,
    );

    orderApplicationService = new OrderApplicationServiceImpl(
      orderCreateCommandHandler,
      orderTrackCommandHandler,
    );

    createOrderCommand = CreateOrderCommand.builder()
      .customerId(CUSTOMER_ID)
      .restaurantId(RESTAURANT_ID)
      .address(
        OrderAddress.builder()
          .street('street_1')
          .postalCode('1000AB')
          .city('Paris')
          .build(),
      )
      .price(PRICE)
      .items([
        OrderItem.builder()
          .productId(PRODUCT_ID)
          .quantity(1)
          .price(50.0)
          .subTotal(50.0)
          .build(),
        OrderItem.builder()
          .productId(PRODUCT_ID)
          .quantity(3)
          .price(50.0)
          .subTotal(150.0)
          .build(),
      ])
      .build();

    createOrderCommandWrongPrice = CreateOrderCommand.builder()
      .customerId(CUSTOMER_ID)
      .restaurantId(RESTAURANT_ID)
      .address(
        OrderAddress.builder()
          .street('street_1')
          .postalCode('1000AB')
          .city('Paris')
          .build(),
      )
      .price(250.0)
      .items([
        OrderItem.builder()
          .productId(PRODUCT_ID)
          .quantity(1)
          .price(50.0)
          .subTotal(50.0)
          .build(),
        OrderItem.builder()
          .productId(PRODUCT_ID)
          .quantity(3)
          .price(50.0)
          .subTotal(150.0)
          .build(),
      ])
      .build();

    createOrderCommandWrongProductPrice = CreateOrderCommand.builder()
      .customerId(CUSTOMER_ID)
      .restaurantId(RESTAURANT_ID)
      .address(
        OrderAddress.builder()
          .street('street_1')
          .postalCode('1000AB')
          .city('Paris')
          .build(),
      )
      .price(210.0)
      .items([
        OrderItem.builder()
          .productId(PRODUCT_ID)
          .quantity(1)
          .price(60.0)
          .subTotal(60.0)
          .build(),
        OrderItem.builder()
          .productId(PRODUCT_ID)
          .quantity(3)
          .price(50.0)
          .subTotal(150.0)
          .build(),
      ])
      .build();

    const customer = new Customer();
    customer.setId(new CustomerId(CUSTOMER_ID));

    const restaurantResponse = Restaurant.builder()
      .restaurantId(new RestaurantId(createOrderCommand.getRestaurantId()))
      .products([
        new Product(new ProductId(PRODUCT_ID), 'product-1', new Money(50.0)),
        new Product(new ProductId(PRODUCT_ID), 'product-2', new Money(50.0)),
      ])
      .active(true)
      .build();

    const order = orderDataMapper.createOrderCommandToOrder(createOrderCommand);
    order.setId(new OrderId(ORDER_ID));

    (customerRepository.findCustomer as jest.Mock).mockReturnValue(customer);
    (
      restaurantRepository.findRestaurantInformation as jest.Mock
    ).mockReturnValue(restaurantResponse);
    (orderRepository.save as jest.Mock).mockReturnValue(order);
  });

  describe('Test CreateOrder', () => {
    it('should create order successfully', async () => {
      const createOrderResponse = await orderApplicationService.createOrder(createOrderCommand);
      expect(createOrderResponse.getOrderStatus()).toBe(OrderStatus.PENDING);
      expect(createOrderResponse.getMessage()).toBe('Order Created Successfully');
      expect(createOrderResponse.getOrderTrackingId()).toBeDefined();
    });

    it('should throw OrderDomainException for wrong total price', async () => {
      await expect(orderApplicationService.createOrder(createOrderCommandWrongPrice)).rejects.toThrow(OrderDomainException);

      try {
        await orderApplicationService.createOrder(createOrderCommandWrongPrice);
      } catch (error) {
        if (error instanceof OrderDomainException) {
          expect(error.message).toBe('Total price: 250 is not equal to Order items total: 200!');
        } else {
          throw error;
        }
      }
    });

    it('should throw OrderDomainException for wrong product price', async () => {
      await expect(orderApplicationService.createOrder(createOrderCommandWrongProductPrice)).rejects.toThrow(OrderDomainException);

      try {
        await orderApplicationService.createOrder(createOrderCommandWrongProductPrice);
      } catch (error) {
        if (error instanceof OrderDomainException) {
          expect(error.message).toBe('Order item price: 60 is not valid for product ' + PRODUCT_ID);
        } else {
          throw error;
        }
      }
    });

    it('should throw OrderDomainException for creating order with passive restaurant', async () => {
      const restaurantResponse = Restaurant.builder()
        .restaurantId(new RestaurantId(createOrderCommand.getRestaurantId()))
        .products([
          new Product(new ProductId(PRODUCT_ID), 'product-1', new Money(50)),
          new Product(new ProductId(PRODUCT_ID), 'product-2', new Money(50)),
        ])
        .active(false)
        .build();
      (restaurantRepository.findRestaurantInformation as jest.Mock).mockReturnValue(restaurantResponse);

      await expect(orderApplicationService.createOrder(createOrderCommand)).rejects.toThrow(OrderDomainException);

      try {
        await orderApplicationService.createOrder(createOrderCommand);
      } catch (error) {
        if (error instanceof OrderDomainException) {
          expect(error.message).toBe("Restaurant with id " + RESTAURANT_ID + " is currently not active!");
        } else {
          throw error;
        }
      }
    });
  });
});
