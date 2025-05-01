import { Page } from "@playwright/test";
import ContactUsComponent from "../components/ContactUsComponent";

class ContactUsPage {
  contactUsComponent: ContactUsComponent;

  constructor(private page: Page) {
    this.page = page;
    this.contactUsComponent = new ContactUsComponent(this.page);
  }

  async open() {
    await this.page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/');
  }

  getHeading() {
    return this.page.locator('h2');
  }

  getFooter() {
    return this.page.locator('footer');
  }
}

export default ContactUsPage;