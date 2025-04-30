import { Page } from '@playwright/test';

class TopNavigationComponent {
  constructor(private page: Page) {
    this.page = page;
  }

  navigateTo = async (link: 'Our Story' | 'Contact' | 'Products') => {
    await this.page
      .getByRole('navigation')
      .getByRole('link', { name: link })
      .click();
  }

  clickOnLogo = async () => {
    await this.page
      .getByRole('link', { name: 'Fur', exact: true })
      .click();
  }
}

export default TopNavigationComponent;