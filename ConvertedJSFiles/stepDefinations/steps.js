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
// import { Given, Then, When } from 'protractor-cucumber-framework';
const { Given, When, Then } = require('cucumber');
const calculator_1 = require("../pages/calculator");
const input_1 = require("../data/input");
var chai = require('chai');
var expect = chai.expect;
Given('I will navigate to Calc site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield calculator_1.calculator.login();
}));
When('Add two number {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // await calculator.calculateResult(input.value1, input.value2, input.operator.add);
    yield calculator_1.calculator.calculateResult(string, string2, input_1.input.operator.add);
}));
Then('The output is displayed {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("stringstringstringstringstring", string);
    // await browser.sleep(50000);
    // await browser.wait(ExpectedConditions.presenceOf(calculator.result(1)),50000);
    let a = yield calculator_1.calculator.result(1).getText();
    // let a =  calculator.assertText(calculator.result(1)); // need to clarify why its not working
    yield expect(a).to.equal(string);
    // await expect(calculator.assertText(calculator.result(1))).to.equal(string);
}));
// Scenario 2 //
// Given('Beginner in cucumber Frame work', async() =>{
//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Inside Given >>>>>>>>>>>>>>>>>>>>>>>>>");
// });
// When('Learning with protractor', async() =>{
//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Inside When >>>>>>>>>>>>>>>>>>>>>>>>>");
// });
// Then('the output is {string} displayed', async(string) =>{
//     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>stringstringstringstringstring",string);
// });
