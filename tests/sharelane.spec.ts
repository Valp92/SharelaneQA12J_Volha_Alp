import { describe } from "mocha";
import { Browser, Builder, By, Key, until, WebDriver } from "selenium-webdriver";
import assert from "assert";
import { expect } from "chai";
import { only } from "node:test";

describe('Sharelane test', async () => {
let driver: WebDriver;

it('Sharelane test positive registration', async () => {
driver = await new Builder().forBrowser(Browser.CHROME).build();
await driver.manage().window().maximize();
try {
await driver.get('https://sharelane.com/cgi-bin/main.py');
await driver.findElement(By.css('a[href="./register.py"]')).sendKeys(Key.RETURN);
await driver.findElement(By.name('zip_code')).sendKeys('220121'), 5000;
await driver.findElement(By.css('input[value="Continue"]')).sendKeys(Key.RETURN), 5000;
await driver.wait(until.urlIs('https://sharelane.com/cgi-bin/register.py?page=1&zip_code=220121')), 5000;
await driver.findElement(By.name('first_name')).sendKeys('Olga'), 3000;
await driver.findElement(By.name('email')).sendKeys('testtest@gmail.com'), 3000;
await driver.findElement(By.name('password1')).sendKeys('12345'), 3000;
await driver.findElement(By.name('password2')).sendKeys('12345'), 3000;
await driver.findElement(By.css('input[value="Register"]')).sendKeys(Key.RETURN), 7000;
await driver.findElement(By.css('.confirmation_message')), 7000;
}
finally {
driver.quit();
}
}) 

it('Sharelane test positive login', async () => {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    try {
    await driver.get('https://sharelane.com/cgi-bin/main.py');
    await driver.findElement(By.name('email')).sendKeys('testtest@gmail.com'), 5000;
    await driver.findElement(By.name('email')).sendKeys(Key.RETURN);
    await driver.findElement(By.name('password')).sendKeys('12345'), 5000;
    await driver.findElement(By.name('password')).sendKeys(Key.RETURN), 5000;
    await driver.findElement(By.css('input[value="Login"]')).sendKeys(Key.RETURN), 7000;
    }
    finally {
    driver.quit();
    }
    }) 
})


 it('Sharelane test negative registration', async () => {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    try {
    await driver.get('https://sharelane.com/cgi-bin/main.py');
    await driver.findElement(By.css('a[href="./register.py"]')).sendKeys(Key.RETURN);
    await driver.findElement(By.css('input[value="Continue"]')).sendKeys(Key.RETURN), 5000;
    await driver.findElement(By.css('.error_message')), 7000;
    }
    finally {
    driver.quit();
    }
    }) 