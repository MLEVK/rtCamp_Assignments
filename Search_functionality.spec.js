const { test, expect } = require('@playwright/test');



test('Search', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();


  // Navigate to the website
  await page.goto('https://www.amazon.com');

  // Perform a search (replace 'YourSearchQuery' with the actual search query)
  const searchQuery = 'laptop';

// Type the search query and press Enter
await page.type('#twotabsearchtextbox', searchQuery);
await page.press('#twotabsearchtextbox', 'Enter');

await page.waitForLoadState('networkidle');

// Wait for search results to load (increase the timeout as needed)
try {
  await page.waitForSelector('#a-autoid-1-announce', { timeout: 10000 }); // Increased timeout to 10 seconds
} catch (error) {
  console.error('Timeout exceeded while waiting for search results to load.');
  return;
}

// Ensure the page content is fully loaded
await page.waitForLoadState('networkidle');

// Validate search results
const searchResults = await page.$$('#a-autoid-1-announce');
if (searchResults && searchResults.length > 0) {
  console.log(`Search results for '${searchQuery}' are displayed correctly.`);
} else {
  console.error(`No search results found for '${searchQuery}'.`);
}



});

