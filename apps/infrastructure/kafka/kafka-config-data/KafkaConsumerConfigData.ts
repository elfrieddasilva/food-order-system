import { PartitionAssigner, RetryOptions } from "kafkajs";
export class KafkaConsumerConfigData {
  private groupId: string;
  private partitionAssigners?: PartitionAssigner[];
  private metadataMaxAge?: number;
  private sessionTimeout?: number;
  private rebalanceTimeout?: number;
  private heartbeatInterval?: number;
  private maxBytesPerPartition?: number;
  private minBytes?: number;
  private maxBytes?: number;
  private maxWaitTimeInMs?: number;
  private retry?: RetryOptions & { restartOnFailure?: (err: Error) => Promise<boolean> };
  private allowAutoTopicCreation?: boolean;
  private maxInFlightRequests?: number;
  private readUncommitted?: boolean;
  private rackId?: string;

  constructor(
     groupId: string,
     partitionAssigners?: PartitionAssigner[],
     metadataMaxAge?: number,
     sessionTimeout?: number,
     rebalanceTimeout?: number,
     heartbeatInterval?: number,
     maxBytesPerPartition?: number,
     minBytes?: number,
     maxBytes?: number,
     maxWaitTimeInMs?: number,
     retry?: RetryOptions & { restartOnFailure?: (err: Error) => Promise<boolean> },
     allowAutoTopicCreation?: boolean,
     maxInFlightRequests?: number,
     readUncommitted?: boolean,
     rackId?: string,
  ) {
    this.groupId = groupId;
    this.partitionAssigners = partitionAssigners;
    this.metadataMaxAge = metadataMaxAge;
    this.sessionTimeout = sessionTimeout;
    this.rebalanceTimeout = rebalanceTimeout;
    this.heartbeatInterval = heartbeatInterval;
    this.maxBytesPerPartition = maxBytesPerPartition;
    this.minBytes = minBytes;
    this.maxBytes = maxBytes;
    this.maxWaitTimeInMs = maxWaitTimeInMs;
    this.retry = retry;
    this.allowAutoTopicCreation = allowAutoTopicCreation;
    this.maxInFlightRequests = maxInFlightRequests;
    this.readUncommitted = readUncommitted;
    this.rackId = rackId;
  }

  getGroupId(): string {
    return this.groupId;
  }
  setGroupId(value: string): void {
    this.groupId = value;
  }

  getPartitionAssigners(): PartitionAssigner[] | undefined {
    return this.partitionAssigners;
  }
  setPartitionAssigners(value: PartitionAssigner[] | undefined): void {
    this.partitionAssigners = value;
  }

  getMetadataMaxAge(): number | undefined {
    return this.metadataMaxAge;
  }
  setMetadataMaxAge(value: number | undefined): void {
    this.metadataMaxAge = value;
  }

  getSessionTimeout(): number | undefined {
    return this.sessionTimeout;
  }
  setSessionTimeout(value: number | undefined): void {
    this.sessionTimeout = value;
  }

  getRebalanceTimeout(): number | undefined {
    return this.rebalanceTimeout;
  }
  setRebalanceTimeout(value: number | undefined): void {
    this.rebalanceTimeout = value;
  }

  getHeartbeatInterval(): number | undefined {
    return this.heartbeatInterval;
  }
  setHeartbeatInterval(value: number | undefined): void {
    this.heartbeatInterval = value;
  }

  getMaxBytesPerPartition(): number | undefined {
    return this.maxBytesPerPartition;
  }
  setMaxBytesPerPartition(value: number | undefined): void {
    this.maxBytesPerPartition = value;
  }

  getMinBytes(): number | undefined {
    return this.minBytes;
  }
  setMinBytes(value: number | undefined): void {
    this.minBytes = value;
  }

  getMaxBytes(): number | undefined {
    return this.maxBytes;
  }
  setMaxBytes(value: number | undefined): void {
    this.maxBytes = value;
  }

  getMaxWaitTimeInMs(): number | undefined {
    return this.maxWaitTimeInMs;
  }
  setMaxWaitTimeInMs(value: number | undefined): void {
    this.maxWaitTimeInMs = value;
  }

  getRetry(): RetryOptions & { restartOnFailure?: (err: Error) => Promise<boolean> } | undefined {
    return this.retry;
  }
  setRetry(value: RetryOptions & { restartOnFailure?: (err: Error) => Promise<boolean> } | undefined): void {
    this.retry = value;
  }

  getAllowAutoTopicCreation(): boolean | undefined {
    return this.allowAutoTopicCreation;
  }
  setAllowAutoTopicCreation(value: boolean | undefined): void {
    this.allowAutoTopicCreation = value;
  }

  getMaxInFlightRequests(): number | undefined {
    return this.maxInFlightRequests;
  }
  setMaxInFlightRequests(value: number | undefined): void {
    this.maxInFlightRequests = value;
  }

  getReadUncommitted(): boolean | undefined {
    return this.readUncommitted;
  }
  setReadUncommitted(value: boolean | undefined): void {
    this.readUncommitted = value;
  }

  getRackId(): string | undefined {
    return this.rackId;
  }
  setRackId(value: string | undefined): void {
    this.rackId = value;
  }
}
