import { test, expect } from '@playwright/test';

test.describe('Shopping Cart Tests', () => {
  
    test.beforeEach(async ({ page }) => {
      // Set viewport size
      await page.setViewportSize({ width: 1024, height: 768 });
      
      // Navigate to the base URL
      await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
    });

  test('Filter by size small and validate results', async ({ page }) => {
    await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
 
    // Filter by size small
    const sizeFilter = page.getByText('S', { exact: true });
    await expect(sizeFilter).toBeVisible();
    await sizeFilter.click();
  
    // Validate results are filtered by size 'S'
    const filteredItems = page.getByText('S', { exact: true });
    const productsText = page.locator('text=2 Product(s) found');
  
    // Assert that the filtered items contain the size 'S'
    await expect(filteredItems).toBeVisible();
  
    // Assert that the product count text is as expected
    await expect(productsText).toHaveText('2 Product(s) found');
  });

  test('Add product to cart and validate it is there', async ({ page }) => {
    await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');

    // Filter by size small
    const sizeFilter = page.getByText('S', { exact: true });
    await expect(sizeFilter).toBeVisible();
    await sizeFilter.click();
   
    // Validate results are filtered by size 'S'
    const filteredItems = page.getByText('S', { exact: true });
    const productsText = page.locator('text=2 Product(s) found');
   
    // Assert that the filtered items contain the size 'S'
    await expect(filteredItems).toBeVisible();
   
    // Assert that the product count text is as expected
    await expect(productsText).toHaveText('2 Product(s) found');

    // Locate and add the Black Batman T-shirt to the cart
    const addBlackBatmanButton = page.locator('div').filter({ hasText: /^Free shippingBlack Batman T-shirt\$10\.90or 9 x\$1\.21Add to cart$/ }).getByRole('button');
    await expect(addBlackBatmanButton).toBeVisible();
    await addBlackBatmanButton.click();
    const closetab = page.getByRole('button', { name: 'X' })
    await closetab.click();

    // Locate and add the Blue Sweatshirt to the cart
    const addBlueSweatshirt = page.locator('div').filter({ hasText: /^Free shippingBlue Sweatshirt\$22\.50or 4 x\$5\.63Add to cart$/ }).getByRole('button');
    await expect(addBlueSweatshirt).toBeVisible();
    await addBlueSweatshirt.click();


    
    // Navigate to the cart
    const cartIcon = page.locator('div').filter({ hasText: /^2$/ }).first();
    await expect(cartIcon).toBeVisible();
    const blackBatmanItem = page.getByRole('img', { name: 'Black Batman T-shirt' });
    await expect(blackBatmanItem).toBeVisible();

    // Remove the Black Batman T-shirt from the cart
    const removeButton = page.locator('role=button[name="remove product from cart"]').first();
    await expect(removeButton).toBeVisible();
    await removeButton.click();
   
    // Validate the Black Batman T-shirt is no longer in the cart
    await expect(blackBatmanItem).toHaveCount(0);

    // Validate total price
    const totalPrice = page.locator('text=$22.50');
    await expect(totalPrice).toBeVisible();

    // Click checkout
    const checkoutButton = page.locator('role=button[name="Checkout"]');
    await expect(checkoutButton).toBeVisible();
    await checkoutButton.click();
  });

});