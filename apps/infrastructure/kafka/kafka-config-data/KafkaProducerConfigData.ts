export class KafkaProducerConfigData {
  private keySerializerClass: string;
  private valueSerializerClass: string;
  private compressionType: string;
  private acks: string;
  private batchSize: number;
  private batchSizeBoostFactor: number;
  private lingerMs: number;
  private requestTimeoutMs: number;
  private retryCount: number;

  constructor(
    keySerializerClass: string,
    valueSerializerClass: string,
    compressionType: string,
    acks: string,
    batchSize: number,
    batchSizeBoostFactor: number,
    lingerMs: number,
    requestTimeoutMs: number,
    retryCount: number,
  ) {
    this.keySerializerClass = keySerializerClass;
    this.valueSerializerClass = valueSerializerClass;
    this.compressionType = compressionType;
    this.acks = acks;
    this.batchSize = batchSize;
    this.batchSizeBoostFactor = batchSizeBoostFactor;
    this.lingerMs = lingerMs;
    this.requestTimeoutMs = requestTimeoutMs;
    this.retryCount = retryCount;
  }

  public getKeySerializerClass(): string {
    return this.keySerializerClass;
  }

  public setKeySerializerClass(value: string): void {
    this.keySerializerClass = value;
  }

  public getValueSerializerClass(): string {
    return this.valueSerializerClass;
  }

  public setValueSerializerClass(value: string): void {
    this.valueSerializerClass = value;
  }

  public getCompressionType(): string {
    return this.compressionType;
  }

  public setCompressionType(value: string): void {
    this.compressionType = value;
  }

  public getAcks(): string {
    return this.acks;
  }

  public setAcks(value: string): void {
    this.acks = value;
  }

  public getBatchSize(): number {
    return this.batchSize;
  }

  public setBatchSize(value: number): void {
    this.batchSize = value;
  }

  public getBatchSizeBoostFactor(): number {
    return this.batchSizeBoostFactor;
  }

  public setBatchSizeBoostFactor(value: number): void {
    this.batchSizeBoostFactor = value;
  }

  public getLingerMs(): number {
    return this.lingerMs;
  }

  public setLingerMs(value: number): void {
    this.lingerMs = value;
  }

  public getRequestTimeoutMs(): number {
    return this.requestTimeoutMs;
  }

  public setRequestTimeoutMs(value: number): void {
    this.requestTimeoutMs = value;
  }

  public getRetryCount(): number {
    return this.retryCount;
  }

  public setRetryCount(value: number): void {
    this.retryCount = value;
  }
}
