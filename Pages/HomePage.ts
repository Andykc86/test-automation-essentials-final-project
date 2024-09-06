import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly sizeFilter: Locator;
  readonly productItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sizeFilter = page.locator('text=S');
    this.productItems = page.locator('.product-item'); 
  }

  async filterBySize(size: string) {
    await this.sizeFilter.click();
  }

  async addProductToCart(productName: string) {
    const addButton = this.page.locator(`text=${productName}`).locator('button:has-text("Add to cart")');
    await addButton.click();
  }

  async navigateToCart() {
    await this.page.click('text=Cart');
  }
}