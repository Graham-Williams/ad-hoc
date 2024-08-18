import puppeteer, { Browser, Page } from 'puppeteer';

// run `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=$(mktemp -d -t 'chrome-remote_data_dir`
const browserGuid: string = "2ba098ed-bc1c-470f-b6b8-808cceb1d8b9"; // change based on output of above command
const port: number = 9222;
const wsChromeEndpointUrl: string = `ws://localhost:${port}/devtools/browser/${browserGuid}`;


(async () => {
    try {
        // console.log("Launching browser...");
        // const browser: Browser = await puppeteer.launch({ headless: false, slowMo: 100 });
        // const page: Page = await browser.newPage();
        console.log("connectine to local browser on port 9222");
        const browser: Browser = await puppeteer.connect({
            browserWSEndpoint: wsChromeEndpointUrl,
        });
        const pages: Page[] = await browser.pages();
    
        for (const page of pages) {
            const title = await page.title();
            const url = page.url();
            console.log(`Title: ${title}, url: ${url}`);
        }
    
        // console.log("Navigating to ChatGPT...");
        // await page.goto('https://chat.openai.com/chat');
    
        // console.log("Logging in...");
        // let loginButtonHtml: string = 'button[data-testid="login-button"]';    
        // await page.waitForSelector(loginButtonHtml, { timeout: 60000 });
        // await page.click(loginButtonHtml);
    
        // console.log("Please complete the CAPTCHA manually...");
        // sleep(600);
    
        // console.log("Resuming script...");
        
        // Perform further actions after logging in
        // For example, clear conversations (assuming such functionality exists):
        // await page.click('button[data-action="clear-conversations"]');
    
        // console.log("Closing the browser...");
        // await browser.close();

    } catch (error) {
        console.error("An error occurred: ", error);
    }
})();
