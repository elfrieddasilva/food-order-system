export class KafkaConsumerException extends Error {
  constructor(message: string) {
    super(message);
  }
}
