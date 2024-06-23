import { Restaurant, RestaurantRepository } from '@app/order-domain';
import { Injectable } from '@nestjs/common';
import { RestaurantOrmImplementation } from './RestaurantOrmImplementation';

@Injectable()
export class RestaurantRepositoryImpl implements RestaurantRepository {
  constructor(
    private readonly restaurantOrmImplementation: RestaurantOrmImplementation,
  ) {}
  findRestaurantInformation(restaurant: Restaurant): void | Restaurant {
    let result: Restaurant;
    this.restaurantOrmImplementation
      .findRestaurantInformation(restaurant)
      .then((foundRestaurant) => (result = foundRestaurant));
    return result;
  }
}
