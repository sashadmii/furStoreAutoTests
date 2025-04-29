import { test, expect } from '@playwright/test';

let page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();

  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/products/deer/');
})


test('Product page has heading', async ({ }) => {
  await expect(page.locator('h2')).toBeVisible();
});

test('Product has image', async ({ }) => {
  await expect(page.locator('.styles')).toBeVisible();
});

test('Product has color picker', async ({ }) => {
  await expect(page.locator('.style-picker > div').first()).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(2)')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(3)')).toBeVisible();
  await expect(page.locator('.style-picker > div:nth-child(4)')).toBeVisible();
});

test('Product has heading', async ({ }) => {
  await expect(page.locator('h3')).toBeVisible();
});

test('Product has description', async ({ }) => {
  await expect(page.getByText('Sacha’s elegant antlers have')).toBeVisible();
  await expect(page.getByText('Slim Fit, 5oz 100% Cotton T-')).toBeVisible();
  await expect(page.getByRole('heading', { name: '$' })).toBeVisible();
});

test('Add to cart button should work', async ({ }) => {
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.locator('div').filter({ hasText: 'Cart summary Sacha the Deer' }).nth(1)).toBeVisible();
  await page.locator('#snipcart').getByRole('listitem').locator('div').filter({ hasText: 'Sacha the Deer' }).nth(2).click();
});