import { describe } from "mocha";
import { Browser, Builder, By, Key, until, WebDriver } from "selenium-webdriver";
import assert from "assert";

describe('Sharelane test', async () => {
let driver: WebDriver;

beforeEach(async() => {
    console.log("pre-condition");
    });
    
    afterEach(async() => {
    console.log("post-condition");
    });

it('Sharelane test positive registration', async () => {
driver = await new Builder().forBrowser(Browser.CHROME).build();
await driver.manage().window().maximize();
try {
await driver.get('https://sharelane.com/cgi-bin/main.py');
await driver.findElement(By.css('a[href="./register.py"]')).click();
await driver.findElement(By.name('zip_code')).sendKeys('220121');
await driver.findElement(By.css('input[value="Continue"]')).click();
await driver.wait(until.urlIs('https://sharelane.com/cgi-bin/register.py?page=1&zip_code=220121')), 5000;
await driver.findElement(By.name('first_name')).sendKeys('Olga');
await driver.findElement(By.name('email')).sendKeys('testtest@gmail.com');
await driver.findElement(By.name('password1')).sendKeys('12345');
await driver.findElement(By.name('password2')).sendKeys('12345');
await driver.findElement(By.css('input[value="Register"]')).click();
await driver.findElement(By.css('.confirmation_message'));
assert.equal(await driver.getCurrentUrl(), 'https://sharelane.com/cgi-bin/register.py?page=2&zip_code=220121&first_name=Olga&last_name=&email=testtest%40gmail.com&password1=12345&password2=12345', 'FAILED REGISTRATION');
}
finally {
driver.quit();
}}) 

it('Sharelane test positive login', async () => {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    try {
    await driver.get('https://sharelane.com/cgi-bin/main.py');
    await driver.findElement(By.name('email')).sendKeys('testtest@gmail.com');
    await driver.findElement(By.name('email')).click();
    await driver.findElement(By.name('password')).sendKeys('12345');
    await driver.findElement(By.name('password')).click();
    await driver.findElement(By.css('input[value="Login"]')).click();
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