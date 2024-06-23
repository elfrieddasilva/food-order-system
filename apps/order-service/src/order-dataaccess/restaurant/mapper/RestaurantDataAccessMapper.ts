import { Product, Restaurant } from '@app/order-domain';
import { RestaurantEntity } from '../entity/RestaurantEntity';
import { RestaurantDataAccessException } from '../exception/RestaurantDataAccessException';
import { Money, ProductId, RestaurantId } from '@app/common';

export class RestaurantDataAccessMapper {
  restaurantToRestaurantProducts(restaurant: Restaurant) {
    return restaurant
      .getProducts()
      .map((product) => product.getId().getValue());
  }

  restaurantEntityToRestaurant(restaurantEntities: RestaurantEntity[]) {
    const restaurantEntity: RestaurantEntity =
      restaurantEntities[0] ||
      (() => {
        throw new RestaurantDataAccessException(
          'Restaurant could not be found!',
        );
      })();

    const restaurantProducts = restaurantEntities.map(
      (entity) =>
        new Product(
          new ProductId(entity.getProductId()),
          entity.getProductName(),
          new Money(Number(entity.getProductPrice())),
        ),
    );

    return Restaurant.builder()
      .restaurantId(new RestaurantId(restaurantEntity.getRestaurantId()))
      .products(restaurantProducts)
      .active(Boolean(restaurantEntity.getProductPrice()))
      .build();
  }
}
