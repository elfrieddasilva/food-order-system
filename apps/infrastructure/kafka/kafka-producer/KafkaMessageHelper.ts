import { Logger } from '@nestjs/common';
import { Kafka } from 'kafkajs';

export class KafkaMessageHelper {
  private static readonly logger = new Logger(KafkaMessageHelper.name);

  public static async sendMessage<T>(
    kafka: Kafka,
    topic: string,
    key: string,
    value:  string | Buffer,
    avroModelName: string,
    orderId: string,
  ): Promise<void> {
    const producer = kafka.producer();

    await producer.connect();

    try {
      const results = await producer.send({
        topic,
        messages: [{ key, value }],
      });

      results.forEach((result) => {
        const { partition, offset } = result;
        KafkaMessageHelper.logger.log(
          `Successfully sent ${avroModelName} message to Kafka for order id: ${orderId} ` +
            `Topic: ${topic}, Partition: ${partition}, Offset: ${offset}`,
        );
      });
    } catch (error) {
      KafkaMessageHelper.logger.error(
        `Failed to send ${avroModelName} message to Kafka: ` +
          `Topic: ${topic}, Error: ${error.message}`,
      );
    } finally {
      await producer.disconnect();
    }
  }
}
