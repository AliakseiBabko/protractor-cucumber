'use strict';

let { Before, Then, When, Given } = require('cucumber');
let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const chai = require('chai');
const chaiAsPromise = require("chai-as-promised");
chai.use(chaiAsPromise);
chai.should();
const EC = protractor.ExpectedConditions;
const world = require('../po/world');
const { browser } = require('protractor');
let MemoryObject = require('./memory');

Before('@smoke', async function() {
    await browser.manage().deleteAllCookies();
    browser.waitForAngularEnabled(false);
    browser.get(browser.baseUrl);
    await browser.sleep(15000);
});
/*
Given('Select Samsung in filter as producer', async function() {    
    if (!world.CatalogPageTV.samsungCheckbox.isSelected()) {
        await world.CatalogPageTV.samsungCheckbox.select();
    }
});
*/
Given('Catalog page for TVs is loaded', async function() {    
    await EC.urlIs(browser.baseUrl);
})
;
When('I drag and drop image of the first item in the grid into the Search field', async function() {
    const target = world.CatalogPageTV.firstElementInGridIMG;
    const destination = world.CatalogPageTV.Header.searchField;
    MemoryObject.setter('originalUrl', world.CatalogPageTV.firstElementInGridA.getAttribute('href'));
    //const sleep = (milliseconds) => { return new Promise(resolve => setTimeout(resolve, milliseconds)); }
    
    await browser.actions().dragAndDrop(target, destination).perform();
    /*
    await browser.actions().mouseDown(target).mouseMove(destination).perform();
    await sleep(3000);
    await browser.actions().mouseUp().perform();*/
});

Then("Item's url should be copied", async function() {
    await browser.switchTo().frame(world.CatalogPageTV.iframe.getWebElement());
    const copiedUrl = await world.CatalogPageTV.iframeSearchField.getAttribute('value');
    return Promise.resolve(copiedUrl).should.eventually.equal(MemoryObject.getter('originalUrl'));
});

Then('The title of the grid is {word}', async function(word) {
    const currentTitle = await world.CatalogPageTV.productGroup.getText();
    return Promise.resolve(currentTitle).should.eventually.equal(word);
});

Then('Left Panel should be visible', async function() {
    await EC.visibilityOf(world.CatalogPageTV.leftMenu);
});

Then("There should be the following buttons in the grid's header:", async function(datatable) {
    const receivedData = datatable.raw();
    for (let i = 0; i < receivedData.length; i++) {
        let current = await element(by.xpath(`//div[#'schema-segments']//span[@innertext='${receivedData[i]}']`));
        await EC.visibilityOf(current);        
    }    
})

