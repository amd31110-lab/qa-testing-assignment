const { test, expect } = require('@playwright/test');

test('User journey', async ({ page }) => {

  await page.goto(process.env.BASE_URL);

  await page.click('text=Sign in');
  await page.click('text=Register');

  const email = `test${Date.now()}@mail.com`;

  await page.fill('input[placeholder="Your first name"]', 'Amaan');
  await page.fill('input[placeholder="Your last name"]', 'Tester');
  await page.fill('input[placeholder="Your address"]', 'Patna');
  await page.fill('input[placeholder="Your postcode"]', '800001');
  await page.fill('input[placeholder="Your city"]', 'Patna');
  await page.fill('input[placeholder="Your phone"]', '9876543210');
  await page.fill('input[placeholder="Your e-mail"]', email);
  await page.fill('input[placeholder="Your password"]', 'Test@123');

  await page.click('text=Register');

  await page.click('text=Sign in');

  await page.fill('input[type="email"]', email);
  await page.fill('input[type="password"]', 'Test@123');

  await page.click('text=Login');

  await page.fill('input[type="search"]', 'pliers');
  await page.press('input[type="search"]', 'Enter');

  await page.click('text=Combination Pliers');

  await page.click('text=Add to cart');

  const cartCount = page.locator('.cart-count');

  await expect(cartCount).toContainText('1');

});
