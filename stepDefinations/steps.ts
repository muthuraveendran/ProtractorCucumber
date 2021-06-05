// import { Given, Then, When } from 'protractor-cucumber-framework';
const { Given , When , Then } = require('cucumber');
import { calculator } from '../pages/calculator';
import { browser, element, by, ExpectedConditions} from 'protractor';
import{input} from '../data/input';
var chai = require('chai');

var expect = chai.expect;


Given('I will navigate to Calc site', async() =>{
    await calculator.login();

});

When('Add two number {string} and {string}', async(string,string2) =>{
    // await calculator.calculateResult(input.value1, input.value2, input.operator.add);
    await calculator.calculateResult(string, string2, input.operator.add);
});

Then('The output is displayed {string}', async(string) =>{
    console.log("stringstringstringstringstring",string);
    // await browser.sleep(50000);
    // await browser.wait(ExpectedConditions.presenceOf(calculator.result(1)),50000);
    let a =  await calculator.result(1).getText();
    // let a =  calculator.assertText(calculator.result(1)); // need to clarify why its not working
    await expect(a).to.equal(string);
    // await expect(calculator.assertText(calculator.result(1))).to.equal(string);

});


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