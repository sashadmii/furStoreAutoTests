import { Page } from '@playwright/test';

class BillingDetailsComponent {
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

}

export default BillingDetailsComponent;