import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly blackBatmanItem: Locator;
  readonly removeButton: Locator;
  readonly totalPrice: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.blackBatmanItem = page.locator('text=Black Batman T-shirt');
    this.removeButton = page.locator('button:has-text("Remove")');
    this.totalPrice = page.locator('text=$22.50'); 
    this.checkoutButton = page.locator('text=Checkout');
  }

  async removeBlackBatmanTShirt() {
    await this.removeButton.click();
  }

  async validateBlackBatmanItemIsRemoved() {
    await expect(this.blackBatmanItem).toHaveCount(0);
  }

  async validateTotalPrice() {
    await expect(this.totalPrice).toBeVisible();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}