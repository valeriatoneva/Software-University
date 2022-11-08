const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://localhost:5500';

describe('Tests', async function(){
    this.timeout(6000);

    let browser, page;

    before(async () => {
      browser = await chromium.launch();
    })

    after(async () => {
        await browser.close()
    })

    beforeEach(async () => {
        page = await browser.newPage;
    })

    afterEach(async () => {
        page.close()
    })

    it('loads all books', async () => {
     // navigate to page 
     await page.goto(host);
     await page.click('page.png')
     // find and click load btn 
     // check that books are displayed 
    })

})