import { Locator, Page } from "@playwright/test";
import ProductsListComponent from "../components/ProductsListComponent";

class ProductsListPage {
  product: ProductsListComponent;
  heading: Locator;
  subHeading: Locator;

  constructor(private page: Page) {
    this.page = page;
    this.product = new ProductsListComponent(this.page);
    this.heading = this.page.getByRole('heading', { name: 'Find your spirit animal' });
    this.subHeading = this.page.getByText('The animal friendly clothing');
  }

  async open() {
    await this.page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
  }
}

export default ProductsListPage;