import { CompressionTypes, ICustomPartitioner, RetryOptions } from "kafkajs";

export class KafkaProducerConfigData {
  private createPartitioner?: ICustomPartitioner;
  private retry?: RetryOptions;
  private metadataMaxAge?: number;
  private allowAutoTopicCreation?: boolean;
  private idempotent?: boolean;
  private transactionalId?: string;
  private transactionTimeout?: number;
  private maxInFlightRequests?: number;
  private compressionType?: CompressionTypes;
  private acks?: number;
  private batchSize?: number;
  private timeoutMs?: number;

  constructor(
    createPartitioner?: ICustomPartitioner,
    retry?: RetryOptions,
    metadataMaxAge?: number,
    allowAutoTopicCreation?: boolean,
    idempotent?: boolean,
    transactionalId?: string,
    transactionTimeout?: number,
    maxInFlightRequests?: number,
    compressionType?: CompressionTypes,
    acks?: number,
    batchSize?: number,
    timeoutMs?: number
  ) {
    this.createPartitioner = createPartitioner;
    this.retry = retry;
    this.metadataMaxAge = metadataMaxAge;
    this.allowAutoTopicCreation = allowAutoTopicCreation;
    this.idempotent = idempotent;
    this.transactionalId = transactionalId;
    this.transactionTimeout = transactionTimeout;
    this.maxInFlightRequests = maxInFlightRequests;
    this.compressionType = compressionType;
    this.acks = acks;
    this.batchSize = batchSize;
    this.timeoutMs = timeoutMs;
  }

  getCreatePartitioner(): ICustomPartitioner | undefined {
    return this.createPartitioner;
  }
  setCreatePartitioner(value: ICustomPartitioner | undefined): void {
    this.createPartitioner = value;
  }

  getRetry(): RetryOptions | undefined {
    return this.retry;
  }
  setRetry(value: RetryOptions | undefined): void {
    this.retry = value;
  }

  getMetadataMaxAge(): number | undefined {
    return this.metadataMaxAge;
  }
  setMetadataMaxAge(value: number | undefined): void {
    this.metadataMaxAge = value;
  }

  getAllowAutoTopicCreation(): boolean | undefined {
    return this.allowAutoTopicCreation;
  }
  setAllowAutoTopicCreation(value: boolean | undefined): void {
    this.allowAutoTopicCreation = value;
  }

  getIdempotent(): boolean | undefined {
    return this.idempotent;
  }
  setIdempotent(value: boolean | undefined): void {
    this.idempotent = value;
  }

  getTransactionalId(): string | undefined {
    return this.transactionalId;
  }
  setTransactionalId(value: string | undefined): void {
    this.transactionalId = value;
  }

  getTransactionTimeout(): number | undefined {
    return this.transactionTimeout;
  }
  setTransactionTimeout(value: number | undefined): void {
    this.transactionTimeout = value;
  }

  getMaxInFlightRequests(): number | undefined {
    return this.maxInFlightRequests;
  }
  setMaxInFlightRequests(value: number | undefined): void {
    this.maxInFlightRequests = value;
  }

  getTimeoutMs(): number {
    return this.timeoutMs;
  }

  setRequestTimeoutMs(value: number): void {
    this.timeoutMs = value;
  }

  getAcks(): number {
    return this.acks;
  }

  setAcks(value: number): void {
    this.acks = value;
  }

  getBatchSize(): number {
    return this.batchSize;
  }

  setBatchSize(value: number): void {
    this.batchSize = value;
  }

  getCompressionType(): CompressionTypes {
    return this.compressionType;
  }

  setCompressionType(value: CompressionTypes): void {
    this.compressionType = value;
  }



}

