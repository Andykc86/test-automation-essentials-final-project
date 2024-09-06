import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';

test.describe('Shopping Cart Tests', () => {
  let homePage: HomePage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
  });

  test('Filter by size small and validate results', async ({ page }) => {
    await test.step('Filter products by size small', async () => {
      await homePage.filterBySize('S');
    });

    await test.step('Validate filtered results contain size "S"', async () => {
      // Ensure filtered items contain 'S' size
      const filteredItems = page.locator('text=S');
      await expect(filteredItems).toBeVisible();

      // Validate the text indicating the number of products found
      const productsText = page.locator('text=2 Product(s) found');
      await expect(productsText).toHaveText('2 Product(s) found');
    });
  });

  test('Add products to cart and validate cart operations', async ({ page }) => {
    await test.step('Filter products by size small', async () => {
      await homePage.filterBySize('S');
    });

    await test.step('Add Black Batman T-shirt to the cart', async () => {
      await homePage.addProductToCart('Black Batman T-shirt');
      // Close any modal or notification if it appears
      await page.click('button:has-text("Close")'); // Adjust if needed
    });

    await test.step('Add Blue Sweatshirt to the cart', async () => {
      await homePage.addProductToCart('Blue Sweatshirt');
    });

    await test.step('Navigate to cart and validate products', async () => {
      await homePage.navigateToCart();
      // Validate Black Batman T-shirt is visible in the cart
      await expect(cartPage.blackBatmanItem).toBeVisible();
    });

    await test.step('Remove Black Batman T-shirt from the cart and validate removal', async () => {
      await cartPage.removeBlackBatmanTShirt();
      // Validate that the Black Batman T-shirt is no longer in the cart
      await expect(cartPage.blackBatmanItem).not.toBeVisible();
    });

    await test.step('Validate total price and proceed to checkout', async () => {
      await cartPage.validateTotalPrice();
      await cartPage.proceedToCheckout();
    });
  });
});