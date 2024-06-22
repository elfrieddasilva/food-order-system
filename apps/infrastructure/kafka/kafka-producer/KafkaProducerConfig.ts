import {
  Kafka,
  Producer,
  ProducerConfig,
  ProducerRecord,
  Message,
  ProducerBatch,
  TopicMessages,
} from 'kafkajs';
import { KafkaConfigData } from '../kafka-config-data/KafkaConfigData';
import { KafkaProducerConfigData } from '../kafka-config-data/KafkaProducerConfigData';

export interface KafkaCustomMessageFormat<K, V> {
  key?: K;
  value: V;
}
export class KafkaProducerConfig<K, V> {
  private kafkaConfigData: KafkaConfigData;
  private kafkaProducerConfigData: KafkaProducerConfigData;
  private producer: Producer;
  private clientId: string;

  constructor(
    kafkaConfigData: KafkaConfigData,
    kafkaProducerConfigData: KafkaProducerConfigData,
    clientId: string,
  ) {
    this.kafkaConfigData = kafkaConfigData;
    this.kafkaProducerConfigData = kafkaProducerConfigData;
    this.clientId = clientId;
    this.producer = this.createProducer();
  }

  private createProducer(): Producer {
    const kafka = new Kafka({
      clientId: this.clientId,
      brokers: this.kafkaConfigData.getBootstrapServers(),
    });

    const producerConfig: ProducerConfig = {
      createPartitioner: this.kafkaProducerConfigData?.getCreatePartitioner(),
      retry: this.kafkaProducerConfigData?.getRetry(),
      metadataMaxAge: this.kafkaProducerConfigData?.getMetadataMaxAge(),
      allowAutoTopicCreation:
        this.kafkaProducerConfigData?.getAllowAutoTopicCreation(),
      idempotent: this.kafkaProducerConfigData?.getIdempotent(),
      transactionalId: this.kafkaProducerConfigData?.getTransactionalId(),
      transactionTimeout: this.kafkaProducerConfigData?.getTransactionTimeout(),
      maxInFlightRequests:
        this.kafkaProducerConfigData?.getMaxInFlightRequests(),
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
    const producerMessages = messages.map((message) => ({
      key: JSON.stringify(message.key),
      value: JSON.stringify(message.value),
    }));

    const record: ProducerRecord = {
      topic,
      messages: producerMessages,
      acks: this.kafkaProducerConfigData?.getAcks(),
      timeout: this.kafkaProducerConfigData?.getTimeoutMs(),
      compression: this.kafkaProducerConfigData?.getCompressionType(),
    };

    await this.producer.send(record);
  }

  public async sendBatch(
    topic: string,
    messages: Array<KafkaCustomMessageFormat<K, V>>,
  ): Promise<void> {
    const kafkaMessages: Array<Message> = messages.map((message) => {
      return {
        key: JSON.stringify(message?.key),
        value: JSON.stringify(message),
      };
    });

    const topicMessages: TopicMessages = {
      topic,
      messages: kafkaMessages,
    };

    const batch: ProducerBatch = {
      topicMessages: [topicMessages],
    };

    await this.producer.sendBatch(batch);
  }
}
