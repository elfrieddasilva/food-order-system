import {
  Kafka,
  KafkaConfig,
  Producer,
  ProducerRecord,
  RecordMetadata,
} from 'kafkajs';
import { KafkaProducer } from '../KafkaProducer';
import { KafkaProducerException } from '../../exception/KafkaProducerException';
import { Logger } from '@nestjs/common';

export class KafkaProducerImpl<K = any, V = any>
  implements KafkaProducer<K, V>
{
  private kafka: Kafka;
  private producer: Producer;
  private  readonly logger = new Logger();

  constructor(kafkaConfig: KafkaConfig) {
    this.kafka = new Kafka(kafkaConfig);
    this.producer = this.kafka.producer();
  }

  async send(topicName: string, key: K, message: V): Promise<void> {
    await this.producer.connect();
    this.logger.log(`Sending message: ${message} to topic: ${topicName}`);
    try {
      const record: ProducerRecord = {
        topic: topicName,
        messages: [{ key: key.toString(), value: JSON.stringify(message) }],
      };

      await this.producer.send(record);
      this.logger.log(
        `Successfully sent message: ${message} to topic: ${topicName}`,
      );
    } catch (error) {
      this.logger.error(
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
      this.logger.log("Closing kafka producer");
      await this.producer.disconnect();
      this.logger.log('Kafka producer disconnected successfully.');
    } catch (error) {
      this.logger.error('Error disconnecting Kafka producer:', error);
      throw new KafkaProducerException(
        `Error disconnecting Kafka producer, ${error}`,
      );
    }
  }
}
