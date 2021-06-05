"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
const protractor_1 = require("protractor");
const input_1 = require("../data/input");
class calculator {
    /*
     login() fuction is used to hit url in the browser
     */
    static login() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get(input_1.input.url);
        });
    }
    ;
    /*
     for calculating value use the function calculateResult()
    */
    static calculateResult(value1, value2, operator) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.firstNumber.sendKeys(value1);
            yield this.secondNumber.sendKeys(value2);
            yield this.operator(operator).click();
            yield this.goButton.click();
        });
    }
    ;
    /*assertTitle() is a function used to assert a title value
     */
    static assertTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    ;
    /* assertText() is a fuction used to assert value for a particular element
     */
    static assertText(input) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(input), 5000);
            let a = yield input.getText();
            console.log(">>>>>>>>>>>>>>>>>>>>>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", a);
            return a;
        });
    }
    ;
}
exports.calculator = calculator;
calculator.firstNumber = protractor_1.element(protractor_1.by.model('first'));
calculator.secondNumber = protractor_1.element(protractor_1.by.model('second'));
calculator.goButton = protractor_1.element(protractor_1.by.id('gobutton'));
calculator.latestResult = protractor_1.element(protractor_1.by.binding('latest'));
calculator.operator = (value) => protractor_1.element(protractor_1.by.cssContainingText('select[ng-model="operator"] option', value));
calculator.result = (value) => protractor_1.element(protractor_1.by.css(`body div table tbody tr:nth-child(${value}) td:nth-child(3)`));
;
