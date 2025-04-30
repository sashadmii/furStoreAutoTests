import { test, expect, Page } from '@playwright/test';
import CartComponent from '../../components/CartComponent';

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
})

test('Create an order should display success page with order details', async ({ }) => {
  const { addToCart, changeCartOptions, checkout } = new CartComponent(page);


  await addToCart('Gavin the Tiger');
  await changeCartOptions('Small', 'Cream', 5);
  checkout();

  // fill out payment details
  await page.getByRole('textbox', { name: 'Full name' }).click();
  await page.getByRole('textbox', { name: 'Full name' }).fill('Sasha');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('email@gmail.com');
  await page.locator('.snipcart-textbox').first().click();
  await page.getByRole('textbox', { name: 'Street address' }).fill('Washington');
  await page.getByText('Washington Street').first().click();

  // wait for backend request to finish
  await page.waitForResponse((response) =>
    response.url().includes("api/localization/addresses") &&
    response.status() === 200 &&
    response.request().method() === 'GET'
  )

  await page.getByRole('textbox', { name: 'Apt/Suite' }).click();
  await page.getByRole('textbox', { name: 'Apt/Suite' }).fill('123');
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill('New York');

  // submit payment
  await page.getByRole('button', { name: 'Continue to payment' }).click();

  // fill card details
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Card number' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Card number' }).fill('4242 4242 4242 4242');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'MM/YY' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'MM/YY' }).fill('09/29');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'CVV' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'CVV' }).fill('123');

  // place the order
  await page.getByRole('button', { name: 'Place order' }).click();

  // success screen - assert order details
  await expect(page.getByRole('heading', { name: 'Thank you for your order' })).toBeVisible();
  await expect(page.getByText('Invoice number : SNIP-')).toBeVisible();
  await expect(page.getByText('Subtotal')).toBeVisible();
  await expect(page.locator('.snipcart-summary-fees__amount').first()).toBeVisible();
  await expect(page.getByText('Total', { exact: true })).toBeVisible();
  await expect(page.getByText('$').nth(2)).toBeVisible();
});