import { RestaurantApprovalResponse } from '@app/order-domain';

export abstract class RestaurantApprovalResponseMessageListener {
  abstract orderApproved(restaurantApprovalResponse: RestaurantApprovalResponse): Promise<void>;;
  abstract orderRejected(restaurantApprovalResponse: RestaurantApprovalResponse): Promise<void>;;
}
