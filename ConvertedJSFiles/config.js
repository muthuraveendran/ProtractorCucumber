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
    framework: 'jasmine',
    specs: ['spec/test.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    onPrepare: () => {
        protractor_1.browser.manage().window().maximize();
    }
};
