import { describe } from "mocha";
import { Browser, Builder, By, Key, until, WebDriver } from "selenium-webdriver";
import assert from "assert";
import { expect } from "chai";

describe('Google2 tests', async () => {
let driver: WebDriver;

before(async() => {
console.log("Glopbal pre-condition");
})

after(async() => {
console.log("Glopbal post-condition");
})

beforeEach(async() => {
console.log("pre-condition");
});

afterEach(async() => {
console.log("post-condition");
});

it('Google search test2', async () => {
driver = await new Builder().forBrowser(Browser.CHROME).build();
await driver.manage().window().maximize();
try {
await driver.get('https://www.google.com');
await driver.findElement(By.name('q')).sendKeys('webdriver');
await driver.findElement(By.name('q')).sendKeys(Key.RETURN);
await driver.wait(until.titleIs('webdriver - Google Search'), 6000) // wait max 5 seconds
assert.equal(await driver.getTitle(), 'webdriver - Google Search', 'Page title');
}
finally {
driver.quit();
}
}) 
})