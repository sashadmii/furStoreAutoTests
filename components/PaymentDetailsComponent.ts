
import { expect, Page } from '@playwright/test';

class PaymentDetailsComponent {
  constructor(private page: Page) {
    this.page = page;
  }

  fillOutForm = async () => {
    await this.page.getByRole('textbox', { name: 'Full name' }).click();
    await this.page.getByRole('textbox', { name: 'Full name' }).fill('Sasha');
    await this.page.getByRole('textbox', { name: 'Email' }).click();
    await this.page.getByRole('textbox', { name: 'Email' }).fill('email@gmail.com');
    await this.page.locator('.snipcart-textbox').first().click();
    await this.page.getByRole('textbox', { name: 'Street address' }).fill('Washington');
    await this.page.getByText('Washington Street').first().click();
  }

  fillOutZipCode = async () => {
    await this.page.getByLabel('Postal/ZIP code').click();
    await this.page.getByLabel('Postal/ZIP code').fill('51200');
  }

  fillOutAparment = async () => {
    await this.page.getByRole('textbox', { name: 'Apt/Suite' }).click();
    await this.page.getByRole('textbox', { name: 'Apt/Suite' }).fill('123');
  }

  fillOutCity = async () => {
    await this.page.getByRole('textbox', { name: 'City' }).click();
    await this.page.getByRole('textbox', { name: 'City' }).fill('New York');
  }

  submit = async () => {
    await this.page.getByRole('button', { name: 'Continue to payment' }).click();
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
  assertSuccessScreen = async () => {
    await expect(this.page.getByRole('heading', { name: 'Thank you for your order' })).toBeVisible();
    await expect(this.page.getByText('Invoice number : SNIP-')).toBeVisible();
    await expect(this.page.getByText('Subtotal')).toBeVisible();
    await expect(this.page.locator('.snipcart-summary-fees__amount').first()).toBeVisible();
    await expect(this.page.getByText('Total', { exact: true })).toBeVisible();
    await expect(this.page.getByText('$').nth(2)).toBeVisible();
  }
}

export default PaymentDetailsComponent;