import { chromium } from '@playwright/test';
import { testConfiguration } from './testConfig';
import { expect } from './src/tests/fixtures/baseTest';
import * as dotenv from 'dotenv';

dotenv.config();
async function globalSetup() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(testConfiguration.websiteURL);
  await page.locator('.css-pdfan1').click();
  await page.getByRole('tab', { name: 'EMAIL ADDRESS' }).click();
  await page.getByPlaceholder('Enter your email').pressSequentially(process.env.EMAIL!);
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.pause()
  await expect(page.locator('.css-4g6ai3'),'Verify redirecting to Landing page after login').toHaveText('MY ACCOUNT')
  await context.storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;