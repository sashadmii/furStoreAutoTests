import { test, expect, Page } from '@playwright/test';
import OurStoryComponent from '../../components/OurStoryComponent';

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/about/');
})


test('Our story page has heading', async ({ }) => {
  const { getHeading } = new OurStoryComponent(page);

  await expect(getHeading('Our story')).toBeVisible();
});

test('Our story page has avatars and names', async ({ }) => {
  const { getAvatar, getName } = new OurStoryComponent(page);

  await expect(getAvatar('Ava Sandler')).toBeVisible();
  await expect(getName('Ava Sandler')).toBeVisible();

  await expect(getAvatar('Steph Poco')).toBeVisible();
  await expect(getName('Steph Poco')).toBeVisible();
});

test('Our story page has motivation paragraphs', async ({ }) => {
  const { getMotivationParagraph, getMotivationText } = new OurStoryComponent(page);

  await expect(getMotivationParagraph('Passion')).toBeVisible();
  await expect(getMotivationText('What more could you want from')).toBeVisible();

  await expect(getMotivationParagraph('Animal')).toBeVisible();
  await expect(getMotivationText('It\'s easy to forget that we\'')).toBeVisible();

  await expect(getMotivationParagraph('Style')).toBeVisible();
  await expect(getMotivationText('We like to keep things plain')).toBeVisible();
});