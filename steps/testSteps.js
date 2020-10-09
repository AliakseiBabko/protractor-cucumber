'use strict';

let { Before, Then, When, Given } = require('cucumber');
const chai = require('chai');
const chaiAsPromise = require("chai-as-promised");
chai.use(chaiAsPromise);
chai.should();
const world = require('../po/world');
const EC = protractor.ExpectedConditions;

Before("@smoke", async () => {
    await browser.manage().deleteAllCookies();
    await browser.get(browser.baseUrl);
});

Given('Catalog switcher is selected', async () => {
    const isSelected = await CatalogPageTV.catalogSwitcher.getAttribute('class').includes('checked');
    return isSelected.should.eventually.equal(true);
})

Then('The name of product group should be Телевизоры', async () => {
    const name = await CatalogPageTV.productGroup.getText();
    return name.should.eventually.equal('Телевизоры');
});

