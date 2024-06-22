import {
  Kafka,
  KafkaConfig,
  Producer,
  ProducerRecord,
  RecordMetadata,
} from 'kafkajs';
import { KafkaProducer } from '../KafkaProducer';
import { KafkaProducerException } from '../../exception/KafkaProducerException';

export class KafkaProducerImpl<K = any, V = any>
  implements KafkaProducer<K, V>
{
  private kafka: Kafka;
  private producer: Producer;

  constructor(kafkaConfig: KafkaConfig) {
    this.kafka = new Kafka(kafkaConfig);
    this.producer = this.kafka.producer();
  }

  async send(topicName: string, key: K, message: V): Promise<void> {
    await this.producer.connect();
    console.info(`Sending message: ${message} to topic: ${topicName}`);
    try {
      const record: ProducerRecord = {
        topic: topicName,
        messages: [{ key: key.toString(), value: JSON.stringify(message) }],
      };

      await this.producer.send(record);
      console.log(
        `Successfully sent message: ${message} to topic: ${topicName}`,
      );
    } catch (error) {
      console.error(
        `Error on kafka producer with key: ${key}, message: ${message}, error: ${error}`,
      );
      throw new KafkaProducerException(
        `Error on kafka producer with key: ${key}, message: ${message}, error: ${error}`,
      );
    } finally {
      await this.close();
    }
  }

  async close(): Promise<void> {
    try {
      console.info("Closing kafka producer");
      await this.producer.disconnect();
      console.log('Kafka producer disconnected successfully.');
    } catch (error) {
      console.error('Error disconnecting Kafka producer:', error);
      throw new KafkaProducerException(
        `Error disconnecting Kafka producer, ${error}`,
      );
    }
  }
}
