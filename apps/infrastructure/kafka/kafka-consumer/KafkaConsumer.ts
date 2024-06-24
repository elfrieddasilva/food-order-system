export abstract class KafkaConsumer<T> {
  abstract receive(
    messages: T[],
    keys: string[],
    partitions: number[],
    offsets: number[],
  ): Promise<void>;
}
