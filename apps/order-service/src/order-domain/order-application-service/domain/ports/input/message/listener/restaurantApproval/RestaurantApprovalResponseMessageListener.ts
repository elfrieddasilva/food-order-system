import { RestaurantApprovalResponse } from '@app/order-domain';

export interface RestaurantApprovalResponseMessageListener {
  orderApproved(restaurantApprovalResponse: RestaurantApprovalResponse): void;
  orderRejected(restaurantApprovalResponse: RestaurantApprovalResponse): void;
}
