import { Page } from "@playwright/test";
import PaymentDetailsComponent from "../components/PaymentDetailsComponent";
import BillingDetailsComponent from "../components/BillingDetailsComponent";
import SuccessfulPaymentComponent from "../components/SuccessfulPaymentComponent";

class PaymentPage {
  paymentDetails: PaymentDetailsComponent;
  billingDetails: BillingDetailsComponent;
  successfulPayment: SuccessfulPaymentComponent;

  constructor(private page: Page) {
    this.page = page;
    this.billingDetails = new BillingDetailsComponent(this.page);
    this.paymentDetails = new PaymentDetailsComponent(this.page);
    this.successfulPayment = new SuccessfulPaymentComponent(this.page);
  }

  getHeading() {
    return this.page.locator('h1');
  }

  getFooter() {
    return this.page.locator('footer');
  }
}

export default PaymentPage;