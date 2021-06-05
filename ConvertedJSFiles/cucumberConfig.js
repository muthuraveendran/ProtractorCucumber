"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    onPrepare: () => {
        protractor_1.browser.manage().window().maximize();
    },
    //  specs: ['spec/test.js'],
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        require: './stepDefinations/steps.js',
        tags: "@aaa"
    }
};
