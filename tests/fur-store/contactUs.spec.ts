import { test, expect, Page } from '@playwright/test';
import ContactUsPage from '../../pages/ContactUsPage';

let page: Page;
let contactUsPage: ContactUsPage;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  contactUsPage = new ContactUsPage(page);
  await contactUsPage.open();
})

test('Contact page has header', async () => {
  await expect(contactUsPage.getHeading()).toBeVisible();
})

test('Contact page has form title', async () => {
  await expect(contactUsPage.contactUsComponent.getFormTitle()).toBeVisible()
})

test('Contact page has map', async () => {
  await expect(contactUsPage.contactUsComponent.getMap()).toBeVisible();
})

test('Submit contact form navigates to success page', async () => {
  await contactUsPage.contactUsComponent.fillContactForm({
    name: 'Oleksandra',
    email: 'email@gmail.com',
    message: 'Message',
  })

  expect(page.url()).toContain('contact-success');
});

