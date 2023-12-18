import { test, expect } from '@playwright/test';

test('has title', async ({ page }, testinfo) => {
  await page.goto('http://localhost:8000/004.templateslots.html');

  const h1 = await page.getByText('Hello Craig!');

  const screenshot = await page.screenshot();
  await testinfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
  await expect(h1).toBeVisible();

  await h1.click();
  const h1_changed = await page.getByText('New text');
  const screenshot2 = await page.screenshot();
  await testinfo.attach('screenshot', { body: screenshot2, contentType: 'image/png' });
  await expect(h1_changed).toBeVisible();
});


