const pup = require('puppeteer');

let browser;
let tab;

beforeEach(async () => {
    browser = await pup.launch({})
    tab = await browser.newPage();
    await tab.goto('http://localhost:3000');
});
afterEach(async () => {
    await browser.close();
})

test('Check for landing page for logo/text', async () => {
    const logo = await tab.$eval('div.logo', elem => elem.innerHTML)

    expect(logo).toEqual('TraWeather')
})