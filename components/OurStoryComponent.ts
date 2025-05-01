import { Page } from '@playwright/test';

class OurStoryComponent {
  constructor(private page: Page) {
    this.page = page;
  }

  getAvatar = (title: string) => {
    return this.page.getByRole('listitem').filter({ hasText: title }).locator('div').first();
  }

  getName = (title: string) => {
    return this.page.getByText(title);
  }

  getMotivationParagraph = (heading: string) => {
    return this.page.getByRole('heading', { name: heading });

  }

  getMotivationText = (text: string) => {
    return this.page.getByText(text);
  }
}

export default OurStoryComponent;