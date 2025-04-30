import { Page } from '@playwright/test';

class ProductsListComponent {
  constructor(private page: Page) {
    this.page = page;
  }

  getTitle = (title: string) => {
    return this.page.getByRole('link', { name: title })
  }

  getPrice = (title: string) => {
    return this.page.getByRole('listitem').filter({ hasText: title }).getByRole('paragraph').nth(1);
  }

  getImage = (num: number) => {
    return this.page.locator(`li:nth-child(${num}) > .styles`);
  }

}

export default ProductsListComponent;