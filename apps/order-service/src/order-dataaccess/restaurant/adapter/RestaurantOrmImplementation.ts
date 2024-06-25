import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from '@app/common';
import { RestaurantOrmRepository } from '../repository/RestaurantOrmRepository';
import { RestaurantDataAccessMapper } from '../mapper/RestaurantDataAccessMapper';
import { RestaurantEntity } from '../entity/RestaurantEntity';
import { Restaurant } from '@app/order-domain';
import { In } from 'typeorm';


export class RestaurantOrmImplementation {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly restaurantOrmRepository: RestaurantOrmRepository,
    private readonly restaurantDataAccessMapper: RestaurantDataAccessMapper,
  ) {}

  async findRestaurantInformation(
    restaurant: Restaurant,
  ): Promise<Restaurant | undefined> {
    const restaurantProducts: UUID[] =
      this.restaurantDataAccessMapper.restaurantToRestaurantProducts(
        restaurant,
      );
    const restaurantEntities = await this.restaurantOrmRepository.find({
      where: {
        restaurantId: restaurant.getId().getValue(),
        productId: In(restaurantProducts),
      },
    });

    return this.restaurantDataAccessMapper.restaurantEntityToRestaurant(
      restaurantEntities,
    );
  }
}
