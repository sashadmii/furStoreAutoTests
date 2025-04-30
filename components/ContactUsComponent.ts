import { Page } from '@playwright/test';

class ContactUsComponent {
  constructor(private page: Page) {
    this.page = page;
  }

  getHeading = () => {
    return this.page.getByRole('heading', { name: 'Get in touch' });
  }

  getFormTitle = () => {
    return this.page.getByRole('heading', { name: 'Send us a message' });
  }

  getMap = () => {
    return this.page.locator('#map');
  }

  fillContactForm = async ({ name, email, message }: { name: string; email: string; message: string }) => {
    await this.page.getByRole('textbox', { name: 'Full Name' }).fill(name);
    await this.page.getByRole('textbox', { name: 'Email Address' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Message' }).fill(message);
    await this.page.getByRole('button', { name: 'Send Message' }).click();
  }
}

export default ContactUsComponent;