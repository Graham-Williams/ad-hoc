const url = "https://www.chess.com/home"

const puppeteer = require("puppeteer");

// wrapping in IIFE to limit scope and to make it all async, allowing for awaits
(async () => {
    // launch browser instance - headless false so I can see the GUI
    const browser = await puppeteer.launch({ headless: false });

    // open new page
    const page = await browser.newPage();

    // navigate to a website
    await page.goto(url);

    // take screenshot of page
    const title = await page.title();
    console.log(`Screenshotting ${title}...`)
    await page.screenshot({ path: `screenshots/${title}.png` })

    // close the browser
    await browser.close();
})();