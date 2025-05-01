import { expect, Page } from '@playwright/test';

class SuccessfulPaymentComponent {
  constructor(private page: Page) {
    this.page = page;
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

export default SuccessfulPaymentComponent;