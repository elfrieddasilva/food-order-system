export interface KafkaConsumer<T = any> {
  receive(
    messages: T[],
    keys: string[],
    partitions: number[],
    offsets: number[],
  ): void;
}
