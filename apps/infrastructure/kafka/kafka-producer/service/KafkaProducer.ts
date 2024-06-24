export abstract class KafkaProducer<K, V> {
  abstract send(topicName: string, key: K, message: V): Promise<void>;
}
