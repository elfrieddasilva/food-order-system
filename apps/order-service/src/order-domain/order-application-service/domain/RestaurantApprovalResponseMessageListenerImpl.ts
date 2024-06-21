import { RestaurantApprovalResponse } from './dto/message';
import { RestaurantApprovalResponseMessageListener } from './ports/input';

export class RestaurantApprovalResponseMessageListenerImpl
  implements RestaurantApprovalResponseMessageListener
{
  orderApproved(restaurantApprovalResponse: RestaurantApprovalResponse): void {
    throw new Error('Method not implemented.');
  }
  orderRejected(restaurantApprovalResponse: RestaurantApprovalResponse): void {
    throw new Error('Method not implemented.');
  }
}
