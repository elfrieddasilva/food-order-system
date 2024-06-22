export class KafkaConsumerConfigData {
  private keyDeserializer: string;
  private valueDeserializer: string;
  private autoOffsetReset: string;
  private specificAvroReaderKey: string;
  private specificAvroReader: string;
  private batchListener: boolean;
  private autoStartup: boolean;
  private concurrencyLevel: number;
  private sessionTimeoutMs: number;
  private heartbeatIntervalMs: number;
  private maxPollIntervalMs: number;
  private pollTimeoutMs: number;
  private maxPollRecords: number;
  private maxPartitionFetchBytesDefault: number;
  private maxPartitionFetchBytesBoostFactor: number;

  constructor(
    keyDeserializer: string,
    valueDeserializer: string,
    autoOffsetReset: string,
    specificAvroReaderKey: string,
    specificAvroReader: string,
    batchListener: boolean,
    autoStartup: boolean,
    concurrencyLevel: number,
    sessionTimeoutMs: number,
    heartbeatIntervalMs: number,
    maxPollIntervalMs: number,
    pollTimeoutMs: number,
    maxPollRecords: number,
    maxPartitionFetchBytesDefault: number,
    maxPartitionFetchBytesBoostFactor: number,
  ) {
    this.keyDeserializer = keyDeserializer;
    this.valueDeserializer = valueDeserializer;
    this.autoOffsetReset = autoOffsetReset;
    this.specificAvroReaderKey = specificAvroReaderKey;
    this.specificAvroReader = specificAvroReader;
    this.batchListener = batchListener;
    this.autoStartup = autoStartup;
    this.concurrencyLevel = concurrencyLevel;
    this.sessionTimeoutMs = sessionTimeoutMs;
    this.heartbeatIntervalMs = heartbeatIntervalMs;
    this.maxPollIntervalMs = maxPollIntervalMs;
    this.pollTimeoutMs = pollTimeoutMs;
    this.maxPollRecords = maxPollRecords;
    this.maxPartitionFetchBytesDefault = maxPartitionFetchBytesDefault;
    this.maxPartitionFetchBytesBoostFactor = maxPartitionFetchBytesBoostFactor;
  }

  public getKeyDeserializer(): string {
    return this.keyDeserializer;
  }

  public setKeyDeserializer(value: string): void {
    this.keyDeserializer = value;
  }

  public getValueDeserializer(): string {
    return this.valueDeserializer;
  }

  public setValueDeserializer(value: string): void {
    this.valueDeserializer = value;
  }

  public getAutoOffsetReset(): string {
    return this.autoOffsetReset;
  }

  public setAutoOffsetReset(value: string): void {
    this.autoOffsetReset = value;
  }

  public getSpecificAvroReaderKey(): string {
    return this.specificAvroReaderKey;
  }

  public setSpecificAvroReaderKey(value: string): void {
    this.specificAvroReaderKey = value;
  }

  public getSpecificAvroReader(): string {
    return this.specificAvroReader;
  }

  public setSpecificAvroReader(value: string): void {
    this.specificAvroReader = value;
  }

  public isBatchListener(): boolean {
    return this.batchListener;
  }

  public setBatchListener(value: boolean): void {
    this.batchListener = value;
  }

  public isAutoStartup(): boolean {
    return this.autoStartup;
  }

  public setAutoStartup(value: boolean): void {
    this.autoStartup = value;
  }

  public getConcurrencyLevel(): number {
    return this.concurrencyLevel;
  }

  public setConcurrencyLevel(value: number): void {
    this.concurrencyLevel = value;
  }

  public getSessionTimeoutMs(): number {
    return this.sessionTimeoutMs;
  }

  public setSessionTimeoutMs(value: number): void {
    this.sessionTimeoutMs = value;
  }

  public getHeartbeatIntervalMs(): number {
    return this.heartbeatIntervalMs;
  }

  public setHeartbeatIntervalMs(value: number): void {
    this.heartbeatIntervalMs = value;
  }

  public getMaxPollIntervalMs(): number {
    return this.maxPollIntervalMs;
  }

  public setMaxPollIntervalMs(value: number): void {
    this.maxPollIntervalMs = value;
  }

  public getPollTimeoutMs(): number {
    return this.pollTimeoutMs;
  }

  public setPollTimeoutMs(value: number): void {
    this.pollTimeoutMs = value;
  }

  public getMaxPollRecords(): number {
    return this.maxPollRecords;
  }

  public setMaxPollRecords(value: number): void {
    this.maxPollRecords = value;
  }

  public getMaxPartitionFetchBytesDefault(): number {
    return this.maxPartitionFetchBytesDefault;
  }

  public setMaxPartitionFetchBytesDefault(value: number): void {
    this.maxPartitionFetchBytesDefault = value;
  }

  public getMaxPartitionFetchBytesBoostFactor(): number {
    return this.maxPartitionFetchBytesBoostFactor;
  }

  public setMaxPartitionFetchBytesBoostFactor(value: number): void {
    this.maxPartitionFetchBytesBoostFactor = value;
  }
}
