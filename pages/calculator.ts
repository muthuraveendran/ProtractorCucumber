import { browser, element, by, ExpectedConditions} from 'protractor';
import{input} from '../data/input';

export class calculator{
     public static firstNumber = element(by.model('first'));
     public static  secondNumber = element(by.model('second'));
     public static goButton = element(by.id('gobutton'));
     public static  latestResult = element(by.binding('latest'));
     public static  operator = (value) =>element(by.cssContainingText('select[ng-model="operator"] option',value));
     public static  result = (value) =>element(by.css(`body div table tbody tr:nth-child(${value}) td:nth-child(3)`));


   /*
    login() fuction is used to hit url in the browser
    */
   public static async login(){
    await browser.get(input.url);
   };

   /* 
    for calculating value use the function calculateResult()
   */
   public static async calculateResult(value1, value2, operator){
    await this.firstNumber.sendKeys(value1);
    await this.secondNumber.sendKeys(value2);
    await this.operator(operator).click();
    await this.goButton.click();
   };

   /*assertTitle() is a function used to assert a title value 
    */
   public static async assertTitle(){
    return await browser.getTitle();
   };

   /* assertText() is a fuction used to assert value for a particular element 
    */
   public static async assertText(input){
        await browser.wait(ExpectedConditions.presenceOf(input),5000);
        let a =  await input.getText();
        console.log(">>>>>>>>>>>>>>>>>>>>>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",a);
        return a;
   };
};