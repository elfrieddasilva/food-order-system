import { Restaurant, RestaurantRepository } from '@app/order-domain';
import { Injectable } from '@nestjs/common';
import { RestaurantOrmImplementation } from './RestaurantOrmImplementation';


export class RestaurantRepositoryImpl implements RestaurantRepository {
  constructor(
    private readonly restaurantOrmImplementation: RestaurantOrmImplementation,
  ) {}
  async findRestaurantInformation(restaurant: Restaurant) {
    try {
      return await this.restaurantOrmImplementation.findRestaurantInformation(
        restaurant,
      );
    } catch (error) {
      throw error;
    }
  }
}
