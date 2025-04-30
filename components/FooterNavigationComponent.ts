import { Page } from '@playwright/test';

class FooterNavigationComponent {
  constructor(private page: Page) {
    this.page = page;
  }

  navigateTo = async (link: string) => {
    await this.page
      .getByRole('contentinfo')
      .getByRole('link', { name: link })
      .click();
  }

  getEmail = (email: string) => {
    return this.page.getByRole('link', { name: email });
  }

  getPhone = (phone: string) => {
    return this.page.getByRole('link', { name: phone });
  }

  clickOnLogo = (num: number) => {

    return num === 0 ?
      this.page.getByRole('listitem').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').first()
      : this.page.getByRole('listitem').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(num);

  }

}

export default FooterNavigationComponent;