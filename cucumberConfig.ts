import {Config, browser } from 'protractor';
export let config: Config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
    },
  framework: 'custom',
  frameworkPath:require.resolve('protractor-cucumber-framework'),

  onPrepare: () => {
   browser.manage().window().maximize();
 },

//  specs: ['spec/test.js'],
 specs: ['../features/demo.feature'],

 cucumberOpts: {
    require: './stepDefinations/steps.js',
    tags:"@aaa"

    }
}
