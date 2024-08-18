Simple hellow-world app for puppeteer that takes screenshots of a provided.

## Pre-reqs
To run, you must have nodejs and typescript installed. You can verify this with:
```
# node js verification
node -v
npm -v

# typescript verification
tsc --version
```
if any of these are not installed, you'll need to install them.

## Setup
You only have to do this once. Run:
```
npm install puppeteer # gpw todo: do I still need this?
npm install typescript @types/node @types/puppeteer ts-node --save-dev
npx tsc --init
```

### Run
```
# open chrome with debugging developer port
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=$(mktemp -d -t 'chrome-remote_data_dir')

# start the script
npx ts-node clearChatGPT.ts
```