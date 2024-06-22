import { Kafka, ProducerRecord, RecordMetadata } from 'kafkajs';

export interface KafkaProducer<K, V> {
  send(topicName: string, key: K, message: V): Promise<RecordMetadata[]>;
}
