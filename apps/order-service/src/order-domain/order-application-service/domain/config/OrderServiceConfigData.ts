export class OrderServiceConfigData {
  private paymentRequestTopicName: string;
  private paymentResponseTopicName: string;
  private restaurantApprovalRequestTopicName: string;
  private restaurantApprovalResponseTopicName: string;

  getPaymentRequestTopicName(): string {
    return this.paymentRequestTopicName;
  }

  setPaymentRequestTopicName(value: string): void {
    this.paymentRequestTopicName = value;
  }

  getPaymentResponseTopicName(): string {
    return this.paymentResponseTopicName;
  }

  setPaymentResponseTopicName(value: string): void {
    this.paymentResponseTopicName = value;
  }

  getRestaurantApprovalRequestTopicName(): string {
    return this.restaurantApprovalRequestTopicName;
  }

  setRestaurantApprovalRequestTopicName(value: string): void {
    this.restaurantApprovalRequestTopicName = value;
  }

  getRestaurantApprovalResponseTopicName(): string {
    return this.restaurantApprovalResponseTopicName;
  }

  setRestaurantApprovalResponseTopicName(value: string): void {
    this.restaurantApprovalResponseTopicName = value;
  }

  static builder() {
    return new Builder();
  }
}

class Builder {
  private _paymentRequestTopicName: string;
  private _paymentResponseTopicName: string;
  private _restaurantApprovalRequestTopicName: string;
  private _restaurantApprovalResponseTopicName: string;

  paymentRequestTopicName(paymentRequestTopicName: string): Builder {
    this._paymentRequestTopicName = paymentRequestTopicName;
    return this;
  }

  paymentResponseTopicName(paymentResponseTopicName: string): Builder {
    this._paymentResponseTopicName = paymentResponseTopicName;
    return this;
  }

  restaurantApprovalRequestTopicName(
    restaurantApprovalRequestTopicName: string,
  ): Builder {
    this._restaurantApprovalRequestTopicName =
      restaurantApprovalRequestTopicName;
    return this;
  }

  restaurantApprovalResponseTopicName(
    restaurantApprovalResponseTopicName: string,
  ): Builder {
    this._restaurantApprovalResponseTopicName =
      restaurantApprovalResponseTopicName;
    return this;
  }

  build(): OrderServiceConfigData {
    const configData = new OrderServiceConfigData();
    configData.setPaymentRequestTopicName(this._paymentRequestTopicName);
    configData.setPaymentResponseTopicName(this._paymentResponseTopicName);
    configData.setRestaurantApprovalRequestTopicName(
      this._restaurantApprovalRequestTopicName,
    );
    configData.setRestaurantApprovalResponseTopicName(
      this._restaurantApprovalResponseTopicName,
    );
    return configData;
  }
}
