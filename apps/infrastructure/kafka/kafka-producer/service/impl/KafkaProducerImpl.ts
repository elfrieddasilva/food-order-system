import {
  Kafka,
  KafkaConfig,
  Producer,
  ProducerRecord,
  RecordMetadata,
} from 'kafkajs';
import { KafkaProducer } from '../KafkaProducer';

export class KafkaProducerImpl<K, V> implements KafkaProducer<K, V> {
  private kafka: Kafka;
  private producer: Producer;

  constructor(kafkaConfig: KafkaConfig) {
    this.kafka = new Kafka(kafkaConfig);
    this.producer = this.kafka.producer();
  }

  async send(topicName: string, key: K, message: V): Promise<RecordMetadata[]> {
    await this.producer.connect();
    try {
      const record: ProducerRecord = {
        topic: topicName,
        messages: [{ key: key.toString(), value: JSON.stringify(message) }],
      };

      const result = await this.producer.send(record);

      const metadata: RecordMetadata[] = result.map((result) => ({
        topicName: result.topicName,
        partition: result.partition,
        offset: result.offset,
        timestamp: result.timestamp,
        errorCode: result.errorCode,
      }));
      console.log(`Successfully sent message to Kafka:`, metadata);
      return metadata;
    } catch (error) {
      console.error(`Failed to send message to Kafka:`, error);
      throw error;
    }
  }

  async close(): Promise<void> {
    try {
      await this.producer.disconnect();
      console.log('Kafka producer disconnected successfully.');
    } catch (error) {
      console.error('Error disconnecting Kafka producer:', error);
      throw error;
    }
  }
}
