import {Config, browser } from 'protractor';
export let config: Config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
    },
  framework: 'jasmine',
  specs: ['spec/test.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
  onPrepare: () => {
   browser.manage().window().maximize();
 }
}
