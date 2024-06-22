export class KafkaConfigData {
  private bootstrapServers: string[];
  private schemaRegistryUrlKey: string;
  private numOfPartitions: number;
  private replicationFactor: number;

  constructor(
    bootstrapServers: string[],
    schemaRegistryUrlKey: string,
    numOfPartitions: number,
    replicationFactor: number,
  ) {
    this.bootstrapServers = bootstrapServers;
    this.schemaRegistryUrlKey = schemaRegistryUrlKey;
    this.numOfPartitions = numOfPartitions;
    this.replicationFactor = replicationFactor;
  }

  setBootstrapServers(bootstrapServers: string[]) {
    this.bootstrapServers = bootstrapServers;
  }

  getBootstrapServers() {
    return this.bootstrapServers;
  }

  setSchemaRegistryUrlKey(schemaRegistryUrlKey: string) {
    this.schemaRegistryUrlKey = schemaRegistryUrlKey;
  }

  getSchemaRegistryUrlKey() {
    return this.schemaRegistryUrlKey;
  }

  setNumOfPartitions(numOfPartitions: number) {
    this.numOfPartitions = numOfPartitions;
  }

  getNumOfPartitions() {
    return this.numOfPartitions;
  }

  setReplicationFactor(replicationFactor: number) {
    this.replicationFactor = replicationFactor;
  }

  getReplicationFactor() {
    return this.replicationFactor;
  }
}
