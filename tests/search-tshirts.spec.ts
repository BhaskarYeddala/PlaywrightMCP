import { test, expect } from '@playwright/test';

test('Search for T-shirts and verify product', async ({ page }) => {
  // 1. Navigate to the website
  await page.goto('http://www.automationpractice.pl/index.php');

  // 2. Search for 'T-shirts'
  await page.getByRole('textbox', { name: 'Search' }).fill('T-shirts');
  await page.getByRole('textbox', { name: 'Search' }).press('Enter');

  // 3. Verify the product is in the list
  await expect(
    page.getByRole('heading', { name: 'Faded Short Sleeve T-shirts' })
  ).toBeVisible();
});
