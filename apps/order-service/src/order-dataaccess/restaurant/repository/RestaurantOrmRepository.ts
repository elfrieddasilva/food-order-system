import { Repository } from "typeorm";
import { RestaurantEntity } from "../entity/RestaurantEntity";

export class RestaurantOrmRepository extends Repository<RestaurantEntity> {}