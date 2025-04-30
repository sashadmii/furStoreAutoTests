import { test, expect, Page } from '@playwright/test';
import CartComponent from '../../components/CartComponent';
import PaymentDetailsComponent from '../../components/PaymentDetailsComponent';

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
})

test('Create an order should display success page with order details', async ({ }) => {
  const { addToCart, changeCartOptions, checkout } = new CartComponent(page);
  const { fillOutForm, fillOutZipCode, fillOutAparment, fillOutCity, submit, fillCardDetails, placeOrder, assertSuccessScreen } = new PaymentDetailsComponent(page);

  await addToCart('Gavin the Tiger');
  await changeCartOptions('Small', 'Cream', 5);
  checkout();

  await fillOutForm();

  await page.waitForResponse((response) =>
    response.url().includes("api/localization/addresses") &&
    response.status() === 200 &&
    response.request().method() === 'GET'
  );

  await fillOutZipCode();
  await fillOutAparment();
  await fillOutCity();

  await submit();

  await fillCardDetails();
  await placeOrder();
  await assertSuccessScreen();

});