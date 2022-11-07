const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const options = {headless: false, slowMo: 200}
const url = 'https://softuni.bg/'

describe('Custom Test', function(){
    it('Should work', async function(){
        const browser = await chromium.launch(options);
        const page = await browser.newPage();
        await page.goto(url);
        await page.click('text=Login')
        await page.fill('i')
        await browser.close();
        expect(true).to.be.true
})
})