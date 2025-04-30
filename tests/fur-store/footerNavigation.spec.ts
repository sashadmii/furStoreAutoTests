import { test, expect, Page } from '@playwright/test';
import FooterNavigationComponent from '../../components/FooterNavigationComponent';

let page: Page;

test.beforeEach(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
})


test('Footer navigation should navigate to Products page', async ({ }) => {
  const footerNavigation = new FooterNavigationComponent(page);
  await footerNavigation.navigateTo('Products');

  await expect(page.getByRole('heading', { name: 'Find your spirit animal' })).toBeVisible();
});

test('Footer navigation should navigate to Our Story page', async ({ }) => {
  const footerNavigation = new FooterNavigationComponent(page);
  await footerNavigation.navigateTo('Our Story');

  await expect(page.getByRole('heading', { name: 'Our story' })).toBeVisible();
});

test('Footer navigation should navigate to Contact page', async ({ }) => {
  const footerNavigation = new FooterNavigationComponent(page);
  await footerNavigation.navigateTo('Contact');;

  await expect(page.getByRole('heading', { name: 'Get in touch' })).toBeVisible();
});

test('Footer navigation should navigate to Shipping page', async ({ }) => {
  const footerNavigation = new FooterNavigationComponent(page);
  await footerNavigation.navigateTo('Shipping');

  await expect(page.getByRole('heading', { name: 'Delivery Details' })).toBeVisible();
});

test('Footer navigation should navigate to Returns page', async ({ }) => {
  const footerNavigation = new FooterNavigationComponent(page);
  await footerNavigation.navigateTo('Returns');

  await expect(page.getByRole('heading', { name: 'Return policy' })).toBeVisible();
});

test('Footer navigation should have Get in touch button', async ({ }) => {
  await expect(page.getByText('Need help with something? Get')).toBeVisible();
});

test('Footer navigation should have email', async ({ }) => {
  const { getEmail } = new FooterNavigationComponent(page);

  await expect(getEmail('fur@example.com')).toBeVisible();
});

test('Footer navigation should have phone', async ({ }) => {
  const { getPhone } = new FooterNavigationComponent(page);

  await expect(getPhone('+1')).toBeVisible();
});

test('Footer navigation Youtube link should work', async ({ }) => {
  // await page.getByRole('listitem').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').first().click();

  const { clickOnLogo } = new FooterNavigationComponent(page);
  await clickOnLogo(0).click();

  await expect(page.url()).toContain('https://www.youtube.com/@IlarionHalushka');
});

test('Footer navigation LinkedIn link should work', async ({ }) => {
  //await page.getByRole('listitem').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(1).click();

  const { clickOnLogo } = new FooterNavigationComponent(page);
  await clickOnLogo(1).click();

  await expect(page.url()).toContain('https://www.linkedin.com/in/ilarion-halushka');
});

test('Footer navigation Instargam link should work', async ({ }) => {
  //await page.getByRole('listitem').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(2).click();
  const { clickOnLogo } = new FooterNavigationComponent(page);
  await clickOnLogo(2).click();

  await page.waitForNavigation();
  await expect(page.url()).toContain('https://www.instagram.com');

});

test('Footer navigation has accurate copyright year', async ({ }) => {
  await expect(page.getByText('All Rights Reserved © 2023')).toBeVisible();
});

test('Footer navigation has right year', async ({ }) => {

  // accurate year
  // const currentYear = new Date().getFullYear().toString();
  // const locator = page.locator('.copyright');
  // await expect(locator).toContainText(currentYear);

  // year 2023
  const currentYear = '2023';
  const locator = page.locator('.copyright');
  await expect(locator).toContainText(currentYear);
});