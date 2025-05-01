import { expect, Page } from '@playwright/test';

class PaymentDetailsComponent {
  constructor(private page: Page) {
    this.page = page;
  }

  fillCardDetails = async () => {
    await this.page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Card number' }).click();
    await this.page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Card number' }).fill('4242 4242 4242 4242');
    await this.page.locator('iframe').contentFrame().getByRole('textbox', { name: 'MM/YY' }).click();
    await this.page.locator('iframe').contentFrame().getByRole('textbox', { name: 'MM/YY' }).fill('09/29');
    await this.page.locator('iframe').contentFrame().getByRole('textbox', { name: 'CVV' }).click();
    await this.page.locator('iframe').contentFrame().getByRole('textbox', { name: 'CVV' }).fill('123');
  }

  placeOrder = async () => {
    await this.page.getByRole('button', { name: 'Place order' }).click();
  }

}

export default PaymentDetailsComponent;