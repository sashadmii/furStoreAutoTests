import { test, expect, Page } from '@playwright/test';
import ProductsListComponent from '../../components/ProductsListComponent';

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
})


test('products list has products with titles', async ({ }) => {
  const { getTitle } = new ProductsListComponent(page);

  await expect(getTitle('Sacha the Deer')).toBeVisible();
  await expect(getTitle('Bumble the Elephant')).toBeVisible();
  await expect(getTitle('Gerald the Giraffe')).toBeVisible();
  await expect(getTitle('Todd the Hedgehog')).toBeVisible();
  await expect(getTitle('Scar the Lion')).toBeVisible();
  await expect(getTitle('Gavin the Tiger')).toBeVisible();

});

test('products list has products with prices', async ({ }) => {
  const { getPrice } = new ProductsListComponent(page);

  await expect(getPrice('Sacha the Deer')).toBeVisible();
  await expect(getPrice('Bumble the Elephant Bumble')).toBeVisible();
  await expect(getPrice('Gerald the Giraffe Gerald the')).toBeVisible();
  await expect(getPrice('Todd the Hedgehog Todd the')).toBeVisible();
  await expect(getPrice('Scar the Lion Scar the lion')).toBeVisible();
  await expect(getPrice('Gavin the Tiger Gavin the')).toBeVisible();

});

test('products list has products with images', async ({ }) => {
  const { getImage } = new ProductsListComponent(page);

  await expect(getImage(1)).toBeVisible();
  await expect(getImage(2)).toBeVisible();
  await expect(getImage(3)).toBeVisible();
  await expect(getImage(4)).toBeVisible();
  await expect(getImage(5)).toBeVisible();
  await expect(getImage(6)).toBeVisible();

}); 
