export abstract class BaseEntity<ID> {
  private id: ID;

  getId(): ID {
    return this.id;
  }

  setId(id: ID) {
    this.id = id;
  }
}
