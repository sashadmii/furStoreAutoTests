import { expect, Locator, Page } from "@playwright/test";
import OurStoryComponent from "../components/OurStoryComponent";

class OurStoryPage {
  content: OurStoryComponent;
  heading: Locator;

  constructor(private page: Page) {
    this.page = page;
    this.content = new OurStoryComponent(this.page);
    this.heading = this.page.getByRole('heading', { name: 'Our story' });
  }

  async open() {
    await this.page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/about/')
    await expect(this.heading).toBeVisible();
  }
}

export default OurStoryPage;