import { Kafka, Producer, ProducerConfig, ProducerRecord } from 'kafkajs';
import { KafkaConfigData } from '../kafka-config-data/KafkaConfigData';
import { KafkaProducerConfigData } from '../kafka-config-data/KafkaProducerConfigData';

export class KafkaProducerConfig<K, V> {
  private kafkaConfigData: KafkaConfigData;
  private kafkaProducerConfigData: KafkaProducerConfigData;
  private producer: Producer;

  constructor(
    kafkaConfigData: KafkaConfigData,
    kafkaProducerConfigData: KafkaProducerConfigData,
  ) {
    this.kafkaConfigData = kafkaConfigData;
    this.kafkaProducerConfigData = kafkaProducerConfigData;
    this.producer = this.createProducer();
  }

  private createProducer(): Producer {
    const kafka = new Kafka({
      clientId: 'your-client-id',
      brokers: this.kafkaConfigData.getBootstrapServers().split(','),
    });

    const producerConfig: ProducerConfig & {
      acks: string;
      linger: number;
      compression: any;
      batchSize: number;
      requestTimeout: number;
    } = {
      idempotent: true,
      maxInFlightRequests: 5,
      retry: {
        retries: this.kafkaProducerConfigData.getRetryCount(),
      },
      acks: this.kafkaProducerConfigData.getAcks(),
      linger: this.kafkaProducerConfigData.getLingerMs(),
      compression: this.kafkaProducerConfigData.getCompressionType() as any,
      batchSize:
        this.kafkaProducerConfigData.getBatchSize() *
        this.kafkaProducerConfigData.getBatchSizeBoostFactor(),
      requestTimeout: this.kafkaProducerConfigData.getRequestTimeoutMs(),
    };

    return kafka.producer(producerConfig);
  }

  public async connect(): Promise<void> {
    await this.producer.connect();
  }

  public async disconnect(): Promise<void> {
    await this.producer.disconnect();
  }

  public async send(
    topic: string,
    messages: { key: K; value: V }[],
  ): Promise<void> {
    const producerMessages = messages.map((msg) => ({
      key: JSON.stringify(msg.key),
      value: JSON.stringify(msg.value),
    }));

    const record: ProducerRecord = {
      topic,
      messages: producerMessages,
    };

    await this.producer.send(record);
  }
}
