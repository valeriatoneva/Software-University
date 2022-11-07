const { chromium } = require('playwright-chromium');

async function browser(){
    const browser = await chromium.launch({headless: false, slowMo: 100});
    const page = await browser.newPage();

    await page.goto('https://softuni.bg')
    await page.screenshot({path: 'screenshot.png'});

    await browser.close()
}