import {
  CreateOrderCommand,
  OrderApplicationService,
  TrackOrderQuery,
} from '@app/order-domain';
import { Body, Controller, Get, Logger, Param } from '@nestjs/common';
import { UUID } from '@app/common';

@Controller('orders')
export class OrderController {
  protected readonly logger = new Logger();
  constructor(
    private readonly orderApplicationService: OrderApplicationService,
  ) {}

  async createOrder(@Body() createOrderCommand: CreateOrderCommand) {
    this.logger.log(
      `Creating order for customer: ${createOrderCommand.getCustomerId()}`,
    );
    const createOrderResponse =
      this.orderApplicationService.createOrder(createOrderCommand);
    this.logger.log(
      `Order created with tracking id: ${createOrderResponse.getOrderTrackingId()}`,
    );
    return createOrderResponse;
  }

  @Get(':trackingId')
  async getOrderByTracking(@Param() trackingId: UUID) {
    const trackingOrderResponse = this.orderApplicationService.trackOrder(
      TrackOrderQuery.builder().orderTrackingId(trackingId).build(),
    );
    this.logger.log(`Returning order status with tracking id: ${trackingOrderResponse.getOrderTrackingId()}`);
    return trackingOrderResponse;
  }
}
