import { Restaurant } from '@app/order-domain-core';

export abstract class RestaurantRepository {
  abstract findRestaurantInformation(restaurant: Restaurant): Promise<Restaurant>;
}
