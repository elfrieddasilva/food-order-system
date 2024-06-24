import { RestaurantApprovalResponse } from './dto/message';
import { RestaurantApprovalResponseMessageListener } from './ports/input';

export class RestaurantApprovalResponseMessageListenerImpl
  implements RestaurantApprovalResponseMessageListener
{
  async orderApproved(restaurantApprovalResponse: RestaurantApprovalResponse) {
    throw new Error('Method not implemented.');
  }
  async orderRejected(restaurantApprovalResponse: RestaurantApprovalResponse) {
    throw new Error('Method not implemented.');
  }
}
