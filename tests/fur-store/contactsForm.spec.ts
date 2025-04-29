import { test, expect } from '@playwright/test';

let page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();

  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/');
})

test('Contact page has header', async ({ }) => {
  await expect(page.getByRole('heading', { name: 'Get in touch' })).toBeVisible();
})

test('Contact page has form title', async ({ }) => {
  await expect(page.getByRole('heading', { name: 'Send us a message' })).toBeVisible()
})

test('Contact page has map', async ({ }) => {
  await expect(page.locator('#map')).toBeVisible();
})

test('Submit contact form navigates to success page', async ({ }) => {
  await page.getByRole('textbox', { name: 'Full Name' }).fill('Oleksandra');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('email@gmail.com');
  await page.getByRole('textbox', { name: 'Message' }).fill('Message');
  await page.getByRole('button', { name: 'Send Message' }).click();

  await expect(page.url()).toContain('contact-success');
});

