export class ErrorDTO {
  readonly code: string;
  readonly message: string;
  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
  static builder() {
    return new Builder();
  }
}

class Builder {
  private _code: string;
  private _message: string;
  
  code(val: string){
    this._code = val;
    return this;
  }

  message(val:string) {
    this._message = val;
    return this;
  }

  build() {
    return new ErrorDTO(this._code, this._message);
  }
}