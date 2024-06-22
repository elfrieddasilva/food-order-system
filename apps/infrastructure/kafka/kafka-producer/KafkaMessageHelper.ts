import { Kafka, ProducerRecord, RecordMetadata } from 'kafkajs';

export class KafkaMessageHelper {
  public static async sendMessage<T>(
    kafka: Kafka,
    topic: string,
    key: string,
    value: (T & string) | Buffer,
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
        console.info(
          `Successfully sent ${avroModelName} message to Kafka: ` +
            `Topic: ${topic}, Partition: ${partition}, Offset: ${offset}`,
        );
      });
    } catch (error) {
      console.error(
        `Failed to send ${avroModelName} message to Kafka: ` +
          `Topic: ${topic}, Error: ${error.message}`,
      );
    } finally {
      await producer.disconnect();
    }
  }
}
