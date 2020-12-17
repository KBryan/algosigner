/* eslint-disable @typescript-eslint/no-var-requires */
const puppeteer = require('puppeteer');
const path = require('path');
const NodeEnvironment = require('jest-environment-node');

function srcPath(subpath) {
  return path.resolve(__dirname, '../../' + subpath);
}

class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
  }

  async setup() {
    await super.setup();
    this.global.browser = await puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXEC_PATH || '',
      headless: false,
      dumpio: true,
      //slowMo: 50, // For watching tests more closely in debugging
      args: [
        `--no-sandbox`,
        //`--no-sandbox-and-elevated`, //For Windows
        `--disable-extensions-except=${srcPath('dist')}`,
        `--load-extension=${srcPath('dist')}`,
      ],
    });
  }

  async teardown() {
    await super.teardown();
    this.global.browser.close();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = PuppeteerEnvironment;
