import { Restaurant } from "@app/order-domain-core";


export interface RestaurantRepository {
    findRestaurantInformation(restaurant: Restaurant): Restaurant | void;
    
}