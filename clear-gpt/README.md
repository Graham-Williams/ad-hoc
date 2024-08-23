# ChatGPT Cleanup Script

This project provides a TypeScript script to clear conversations from a ChatGPT page using Puppeteer.

## Prerequisites

1. **Node.js** and **npm**: Ensure Node.js (v18 or higher) and npm are installed on your system. You can check your versions with:
    ```sh
    node -v
    npm -v
    ```

2. **TypeScript** and **Puppeteer**: Install TypeScript, Puppeteer, and other required packages:
    ```sh
    npm install puppeteer
    npm install typescript @types/node @types/puppeteer ts-node --save-dev
    ```


## Setup

1. **Change to correct directory**:
if you're not already in the `clear-gpt` directory:
    ```sh
    cd /path/to/adhoc/clear-gpt
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Chrome with Remote Debugging**: The script requires a Chrome browser running with remote debugging enabled. Run the following command to start Chrome with remote debugging on port 9222:
    ```sh
    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=$(mktemp -d -t 'chrome-remote_data_dir')
    ```

    > **Note:** This command is specific to macOS. For other operating systems, the command will differ. You need to ensure you start Chrome with remote debugging enabled.
4. **Configure the Script**:
    - Open the `clearChatGPT.ts` file.
    - Change the `browserGuid` variable to match the output of the command you used to start Chrome.

4. **Log in to ChatGPT**:
    - Go to the Chrome browser instance started with remote debugging.
    - Log in to ChatGPT and navigate to the home page. Ensure you do not click into any specific conversations; you must be on the home page.

## Running the Script

Run the script using `ts-node`:
```sh
npx ts-node clearChatGPT.ts
```

## Troubleshooting

- **Error finding ChatGPT page**: Ensure you are logged into ChatGPT and are on the home page.
- **Errors during script execution**: Check if Chrome is correctly started with remote debugging and that the `browserGuid` is correctly set.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
