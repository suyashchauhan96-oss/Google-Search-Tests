// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    use: {
        headless: true,             // show the browser UI
        viewport: null,              // disable fixed viewport (for full window)
        launchOptions: {
            args: [
                '--start-maximized', // maximize browser window
                '--window-size=1920,1080' // fallback in case maximize doesn’t work
            ],
            slowMo: 300,             // 🐢 slow down execution (300ms between actions)
        },
        screenshot: 'on',            // capture screenshots for all tests
        video: 'on',                 // record video for all tests
    },

    projects: [
        {
            name: 'chrome',
            use: {
                ...devices['Desktop Chrome'], // use Chrome device profile
                channel: 'chrome',             // explicitly use Chrome browser
            },
        },
    ],
});
