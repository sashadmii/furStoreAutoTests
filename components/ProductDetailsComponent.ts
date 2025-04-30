import { Page } from '@playwright/test';

class ProductDetailsComponent {
  constructor(private page: Page) {
    this.page = page;
  }

  getPageHeading = () => {
    return this.page.locator('h2');
  }

  getProductImageHeading = () => {
    return this.page.locator('.styles');
  }
  getColor = (num: number) => {
    return num === 1 ?
      this.page.locator('.style-picker > div').first() :
      this.page.locator(`.style-picker > div:nth-child(${num})`);
  }

  getProductHeading = () => {
    return this.page.locator('h3');
  }

  getProductDescription = (description: string) => {
    return this.page.getByText(description);
  }

  getButton = () => {
    return this.page.getByRole('button', { name: 'Add to cart' });
  }

}

export default ProductDetailsComponent;