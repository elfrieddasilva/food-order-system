import { DomainEvent } from "../DomainEvent";


export abstract class DomainEventPublisher <T extends DomainEvent<T>> {
    abstract publish(domainEvent: T): Promise<void>;

}