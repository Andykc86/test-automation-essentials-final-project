import { test, expect } from '@playwright/test';

test.describe ('Week2 Assignment',() => {

  test("Launching a Browser", async ({ page }) => {
  await page.goto('https://playwright.dev/docs/api/class-test');

});

  test("Navigating To URl",async({page}) => {
    await page.goto ('https://the-internet.herokuapp.com');

  });

  test('Find an elemet page',async({page}) =>{
    await page.goto ('https://the-internet.herokuapp.com/add_remove_elements/');
    await page.getByText('Add Element');
  });


   test('Selecting Dropdown Options',async({page}) =>{
  await page.goto ('https://the-internet.herokuapp.com/dropdown');
  await page.locator('#dropdown').selectOption('Option 1');
});

  test('Inputs',async({page}) =>{
  await page.goto ('https://the-internet.herokuapp.com/inputs')
  await page.getByRole('spinbutton').fill("2");
});


  test('Checkboxes',async({page}) =>{
  await page.goto ('https://the-internet.herokuapp.com/checkboxes')
  await page.getByRole('checkbox').first();
});
});






