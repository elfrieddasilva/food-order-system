import { DomainEvent } from "../DomainEvent";


export interface DomainEventPublisher <T extends DomainEvent<T>> {
    publish(domainEvent: T): void;

}