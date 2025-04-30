import { test, expect, Page } from '@playwright/test';
import ContactUsComponent from '../../components/ContactUsComponent';

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();

  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/');
})

test('Contact page has header', async ({ }) => {
  const { getHeading } = new ContactUsComponent(page);

  await expect(getHeading()).toBeVisible();
})

test('Contact page has form title', async ({ }) => {
  const { getFormTitle } = new ContactUsComponent(page);

  await expect(getFormTitle()).toBeVisible()
})

test('Contact page has map', async ({ }) => {
  const { getMap } = new ContactUsComponent(page);

  await expect(getMap()).toBeVisible();
})

test('Submit contact form navigates to success page', async ({ }) => {
  const { fillContactForm } = new ContactUsComponent(page);

  await fillContactForm({
    name: 'Oleksandra',
    email: 'email@gmail.com',
    message: 'Message',
  })

  expect(page.url()).toContain('contact-success');
});

