import { test, expect, Page } from '@playwright/test';
import ProductDetailsComponent from '../../components/ProductDetailsComponent';

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();

  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/products/deer/');
})


test('Product page has heading', async ({ }) => {
  const { getPageHeading } = new ProductDetailsComponent(page);

  await expect(getPageHeading()).toBeVisible();
});

test('Product has image', async ({ }) => {
  const { getProductImageHeading } = new ProductDetailsComponent(page);

  await expect(getProductImageHeading()).toBeVisible();
});

test('Product has color picker', async ({ }) => {
  const { getColor } = new ProductDetailsComponent(page);

  await expect(getColor(1)).toBeVisible();
  await expect(getColor(2)).toBeVisible();
  await expect(getColor(3)).toBeVisible();
  await expect(getColor(4)).toBeVisible();
});

test('Product has heading', async ({ }) => {
  const { getProductHeading } = new ProductDetailsComponent(page);

  await expect(getProductHeading()).toBeVisible();
});

test('Product has description', async ({ }) => {
  const { getProductDescription } = new ProductDetailsComponent(page);

  await expect(getProductDescription('Sacha’s elegant antlers have')).toBeVisible();
  await expect(getProductDescription('Slim Fit, 5oz 100% Cotton T-')).toBeVisible();
  await expect(getProductDescription('$')).toBeVisible();
});

test('Add to cart button should work', async ({ }) => {
  const { getButton } = new ProductDetailsComponent(page);

  await getButton().click();
});