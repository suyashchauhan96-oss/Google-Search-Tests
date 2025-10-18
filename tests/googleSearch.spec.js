const { test, expect } = require('@playwright/test');

// Array of search phrases
const searchPhrases = ['Valletta', 'The Multiple', 'Ftira'];

test.describe('Google Search Autocomplete Tests', () => {

    for (const phrase of searchPhrases) {
        test(`Check autocomplete for "${phrase}"`, async ({ page }) => {

            // Go to Google
            await page.goto('https://www.google.com');

            // Accept cookies if prompt appears (Google EU users)
            const acceptButton = page.locator('button:has-text("I agree")');
            if (await acceptButton.isVisible()) {
                await acceptButton.click();
            }

            // Type the search phrase
            const searchBox = page.locator('textarea[name="q"]');
            searchBox.click();
            await searchBox.fill(phrase);

            // Wait for autocomplete suggestions to appear
            const suggestions = page.locator('ul[role="listbox"] li span');
            await suggestions.first().waitFor({ timeout: 10000 });
            await expect(suggestions.first()).toBeVisible();

            // Validate that at least one suggestion contains the typed phrase
            const allSuggestions = await suggestions.allTextContents();
            const matched = allSuggestions.some(text =>
                text.toLowerCase().includes(phrase.toLowerCase())
            );

            // Logger
            if (matched) {
                console.log(`Search phrase "${phrase}" is displayed successfully!`);
            } else {
                console.log(`Search phrase "${phrase}" is NOT displayed!`);
            }

            // Assert to fail test if no match
            expect(matched).toBeTruthy();
        });
    }

});
