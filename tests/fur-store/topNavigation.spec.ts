import { test, expect, Page } from '@playwright/test';
import TopNavigationComponent from '../../components/TopNavigationComponent';

let page: Page;

test.beforeEach(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
})


test('Top navigation should navigate to Our Story @smoke', async ({ }) => {
  const topNavigation = new TopNavigationComponent(page);
  await topNavigation.navigateTo('Our Story');

  await expect(page.getByRole('heading', { name: 'Our story' })).toBeVisible();
});

test('Top navigation should navigate to Contacts @smoke', async ({ }) => {
  const topNavigation = new TopNavigationComponent(page);
  await topNavigation.navigateTo('Contact');

  await expect(page.getByRole('heading', { name: 'Get in touch' })).toBeVisible();
});

test('Top navigation should navigate to Products @smoke', async ({ }) => {
  const topNavigation = new TopNavigationComponent(page);
  await topNavigation.navigateTo('Our Story');
  await topNavigation.navigateTo('Products');

  await expect(page.getByRole('heading', { name: 'Find your spirit animal' })).toBeVisible();
  await expect(page.getByText('The animal friendly clothing')).toBeVisible();

});

test('Top navigation should navigate to Products when clicking on logo', async ({ }) => {
  const topNavigation = new TopNavigationComponent(page);
  await topNavigation.navigateTo('Contact');
  topNavigation.clickOnLogo();

  await expect(page.getByRole('heading', { name: 'Find your spirit animal' })).toBeVisible();
});