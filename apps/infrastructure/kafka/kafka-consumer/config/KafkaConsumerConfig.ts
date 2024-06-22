import {
  Kafka,
  Consumer,
  ConsumerConfig,
  ConsumerSubscribeTopics,
  EachMessagePayload,
  EachBatchPayload,
} from 'kafkajs';
import { KafkaConfigData } from '../../kafka-config-data/KafkaConfigData';
import { KafkaConsumerConfigData } from '../../kafka-config-data/KafkaConsumerConfigData';

export class KafkaConsumerConfig {
  private kafkaConfigData: KafkaConfigData;
  private kafkaConsumerConfigData: KafkaConsumerConfigData;

  private consumer: Consumer;
  private clientId: string;
  private groupId: string;
  private subscription: ConsumerSubscribeTopics;

  constructor(
    kafkaConfigData: KafkaConfigData,
    kafkaConsumerConfigData: KafkaConsumerConfigData,
    clientId: string,
    groupId: string,
    topics?: string[],
  ) {
    this.kafkaConfigData = kafkaConfigData;
    this.kafkaConsumerConfigData = kafkaConsumerConfigData;
    this.clientId = clientId;
    this.groupId = groupId;
    this.subscription = {
      topics: topics,
      fromBeginning: false,
    };
    this.consumer = this.createConsumer();
  }

  setTopics(topics: string[]) {
    const subscription = this.subscription;
    this.subscription = {
      ...subscription,
      topics,
    };
  }

  private createConsumer(): Consumer {
    const kafka = new Kafka({
      clientId: this.clientId,
      brokers: this.kafkaConfigData.getBootstrapServers(),
    });

    const consumerConfig: ConsumerConfig = {
      groupId: this.kafkaConsumerConfigData?.getGroupId(),
      partitionAssigners: this.kafkaConsumerConfigData?.getPartitionAssigners(),
      metadataMaxAge: this.kafkaConsumerConfigData?.getMetadataMaxAge(),
      sessionTimeout: this.kafkaConsumerConfigData?.getSessionTimeout(),
      rebalanceTimeout: this.kafkaConsumerConfigData?.getRebalanceTimeout(),
      heartbeatInterval: this.kafkaConsumerConfigData?.getHeartbeatInterval(),
      maxBytesPerPartition:
        this.kafkaConsumerConfigData?.getMaxBytesPerPartition(),
      minBytes: this.kafkaConsumerConfigData?.getMinBytes(),
      maxBytes: this.kafkaConsumerConfigData?.getMaxBytes(),
      maxWaitTimeInMs: this.kafkaConsumerConfigData?.getMaxWaitTimeInMs(),
      retry: this.kafkaConsumerConfigData?.getRetry(),
      allowAutoTopicCreation:
        this.kafkaConsumerConfigData?.getAllowAutoTopicCreation(),
      maxInFlightRequests:
        this.kafkaConsumerConfigData?.getMaxInFlightRequests(),
      readUncommitted: this.kafkaConsumerConfigData?.getReadUncommitted(),
      rackId: this.kafkaConsumerConfigData?.getRackId(),
    };

    return kafka.consumer(consumerConfig);
  }

  public async connect(): Promise<void> {
    await this.consumer.connect();
  }

  public async disconnect(): Promise<void> {
    await this.consumer.disconnect();
  }

  public async subscribe(subscription: ConsumerSubscribeTopics): Promise<void> {
    await this.consumer.subscribe(subscription);
  }
  public async startConsumer(): Promise<void> {
    try {
      await this.connect();
      await this.subscribe(this.subscription);

      await this.consumer.run({
        eachMessage: async (messagePayload: EachMessagePayload) => {
          const { topic, partition, message } = messagePayload;
          const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
          console.log(`- ${prefix} ${message.key}#${message.value}`);
        },
      });
    } catch (error) {
      throw error;
    }
  }

  public async startBatchConsumer(): Promise<void> {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe(this.subscription);
      await this.consumer.run({
        eachBatch: async (eachBatchPayload: EachBatchPayload) => {
          const { batch } = eachBatchPayload;
          for (const message of batch.messages) {
            const prefix = `${batch.topic}[${batch.partition} | ${message.offset}] / ${message.timestamp}`;
            console.log(`- ${prefix} ${message.key}#${message.value}`);
          }
        },
      });
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  public async shutdown(): Promise<void> {
    await this.consumer.disconnect();
  }
}
