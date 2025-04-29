import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
})

test('Footer navigation should navigate to Products page', async ({ page }) => {
  await page.getByRole('contentinfo').getByRole('link', { name: 'Products' }).click();

  await expect(page.getByRole('heading', { name: 'Find your spirit animal' })).toBeVisible();
});

test('Footer navigation should navigate to Our Story page', async ({ page }) => {
  await page.getByRole('contentinfo').getByRole('link', { name: 'Our Story' }).click();

  await expect(page.getByRole('heading', { name: 'Our story' })).toBeVisible();
});

test('Footer navigation should navigate to Contact page', async ({ page }) => {
  await page.getByRole('contentinfo').getByRole('link', { name: 'Contact' }).click();

  await expect(page.getByRole('heading', { name: 'Get in touch' })).toBeVisible();
});

test('Footer navigation should navigate to Shipping page', async ({ page }) => {
  await page.getByRole('link', { name: 'Shipping' }).click();

  await expect(page.getByRole('heading', { name: 'Delivery Details' })).toBeVisible();
});

test('Footer navigation should navigate to Returns page', async ({ page }) => {
  await page.getByRole('link', { name: 'Returns' }).click();

  await expect(page.getByRole('heading', { name: 'Return policy' })).toBeVisible();
});

test('Footer navigation should have Get in touch button', async ({ page }) => {
  await expect(page.getByText('Need help with something? Get')).toBeVisible();
});

test('Footer navigation should have email', async ({ page }) => {
  await expect(page.getByRole('link', { name: 'fur@example.com' })).toBeVisible();
});

test('Footer navigation should have phone', async ({ page }) => {
  await expect(page.getByRole('link', { name: '+1' })).toBeVisible();
});

test('Footer navigation Youtube link should work', async ({ page }) => {
  await page.getByRole('listitem').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').first().click();

  await expect(page.url()).toContain('https://www.youtube.com/@IlarionHalushka');
});

test('Footer navigation LinkedIn link should work', async ({ page }) => {
  await page.getByRole('listitem').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(1).click();

  await expect(page.url()).toContain('https://www.linkedin.com/in/ilarion-halushka');
});

test('Footer navigation Instargam link should work', async ({ page }) => {
  await page.getByRole('listitem').filter({ hasText: 'Contact Us Need help with' }).locator('div').getByRole('link').nth(2).click();

  await expect(page.url()).toContain('https://www.instagram.com/h.i.l.a.r.i.o.n');

});