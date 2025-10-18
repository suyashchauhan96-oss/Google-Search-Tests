// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    use: {
        headless: false,
        viewport: null,
        launchOptions: {
            args: [
                '--start-maximized',
                '--window-size=1920,1080'
            ],
            slowMo: 300,
        },
        screenshot: 'on',
        video: 'on',
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
