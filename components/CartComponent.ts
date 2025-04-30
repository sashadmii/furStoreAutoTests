import { Page, Locator } from '@playwright/test';

class CartComponent {
  #addToCartButton: Locator;
  #incrementQuantityButton: Locator;
  #checkoutButton: Locator;

  constructor(private page: Page) {
    this.page = page;
    this.#addToCartButton = this.page.getByRole('button', { name: 'Add to cart' });
    this.#incrementQuantityButton = this.page.getByLabel('Increment quantity');
    this.#checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
  }

  addToCart = async (name: string) => {
    await this.page.getByRole('link', { name: name }).click();
    await this.#addToCartButton.click();
  }

  changeCartOptions = async (size: string, color: string, num: number) => {
    await this.page.getByLabel('Size').selectOption(size);
    await this.page.getByLabel('Color').selectOption(color);

    for (let i = 0; i < num; i++) {
      await this.#incrementQuantityButton.click();
    }
  }

  checkout = () => {
    this.#checkoutButton.click();
  }
}
export default CartComponent;