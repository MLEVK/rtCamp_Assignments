const { test, expect } = require('@playwright/test');



test('Checkout', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const { test, expect } = require('@playwright/test');

test('Validate Login', async ({ page }) => {
  // Navigate to Amazon
  await page.goto('https://www.amazon.com/');

  // Click on Sign in button
  await page.click('#nav-link-accountList');

  // Perform Login
  await page.type('#ap_email', 'Email here'); // Enter your Emai id here
  await page.click('#continue');
  await page.type('#ap_password', 'Password here'); // Enter your Password here

  // Click on the 'Sign-In' button
  await page.click('#signInSubmit');

  // Validate successful login
  const usernameElement = await page.waitForSelector('#nav-link-accountList-nav-line-1');
  const username = await usernameElement.innerText();
  expect(username).toContain('Hello, Yor name'); // Replace 'Your Name' with the expected username
});

test('Should be able to add product to cart and perform checkout action', async ({ page }) => {
  // Navigate to a product page
  await page.goto('https://www.amazon.com/dp/B07VGRJDFY'); // Replace with a valid product URL

  // Click on 'Add to Cart' button
  await page.click('#add-to-cart-button');

  // Navigate to Cart
  await page.goto('https://www.amazon.com/gp/cart/view.html');

  // Validate product in the cart
  const productTitleElement = await page.waitForSelector('.a-size-medium');
  const productTitle = await productTitleElement.innerText();
  expect(productTitle).toContain('Product Title'); // Replace 'Product Title' with the expected product title

  // Perform checkout actions
  // Add more steps for checkout process as needed
});

test('Validate Search Result', async ({ page }) => {
  // Navigate to Amazon
  await page.goto('https://www.amazon.com/');

  // Perform a search
  await page.fill('#twotabsearchtextbox', 'Playwright book'); // Replace with a valid search query
  await page.press('#twotabsearchtextbox', 'Enter');

  // Validate search results
  const resultsCountElement = await page.waitForSelector('.s-result-count');
  const resultsCountText = await resultsCountElement.innerText();
  expect(resultsCountText).toContain('results for "Playwright book"'); // Adjust the expected result text as needed
});

test('Validate Product Wishlist functionality', async ({ page }) => {
  // Navigate to a product page
  await page.goto('https://www.amazon.com/dp/B07VGRJDFY'); // Replace with a valid product URL

  // Click on 'Add to Wish List' button
  await page.click('#wishListMainButton');

  // Navigate to Wishlist page
  await page.goto('https://www.amazon.com/gp/registry/wishlist/yourwishlistid'); // Replace with your actual Wishlist URL

  // Validate product in the Wishlist
  const wishlistTitleElement = await page.waitForSelector('.a-size-medium');
  const wishlistTitle = await wishlistTitleElement.innerText();
  expect(wishlistTitle).toContain('Product Title'); // Replace 'Product Title' with the expected product title in Wishlist
});




     
  
  






});