const { test, expect } = require('@playwright/test');



test('Login', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

  // Navigate to Amazon login page
  await page.goto('https://www.amazon.com');

  // Click on the 'Sign in' link to go to the login page
  await page.click('#nav-link-accountList');

  // Wait for the login form to be visible
  await page.waitForSelector('#ap_email');

  // Fill in the login credentials
  await page.type('#ap_email', 'Email here'); // Write your email id here
  await page.click('#continue');
  await page.type('#ap_password', 'Password here'); // Write your password here

  // Click on the 'Sign-In' button
  await page.click('#signInSubmit');

  // Wait for login to complete and check if the login was successful
  await page.waitForNavigation();
  
  // Verify if the login was successful by checking for a known element on the logged-in page
  const isLoggedIn = await page.$('#nav-link-accountList-nav-line-1');
  
  if (isLoggedIn) {
    console.log('Login successful!');
  } else {
    console.log('Login failed. Please check your credentials.');
  }

  // Close the browser
  await browser.close();
});
