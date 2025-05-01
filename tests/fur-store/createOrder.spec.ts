import { test, Page } from '@playwright/test';
import CartComponent from '../../components/CartComponent';
import PaymentPage from '../../pages/PaymentPage';

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
})

test('Create an order should display success page with order details', async ({ }) => {
  const cart = new CartComponent(page);
  const paymentPage = new PaymentPage(page);

  await cart.addToCart('Gavin the Tiger');
  await cart.changeCartOptions('Small', 'Cream', 5);
  cart.checkout();

  await page.pause()

  await paymentPage.billingDetails.fillOutForm();

  await page.waitForResponse((response) =>
    response.url().includes("api/localization/addresses") &&
    response.status() === 200 &&
    response.request().method() === 'GET'
  );

  await paymentPage.billingDetails.fillOutZipCode();
  await paymentPage.billingDetails.fillOutAparment();
  await paymentPage.billingDetails.fillOutCity();

  await paymentPage.billingDetails.submit();

  await paymentPage.paymentDetails.fillCardDetails();
  await paymentPage.paymentDetails.placeOrder();

  await paymentPage.successfulPayment.assertSuccessScreen();

});