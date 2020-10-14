'use strict';

const BasePage = require("./BasePage");

class CatalogPageTV extends BasePage{
	constructor (){
		super();

        this.leftMenu = $('.schema-grid__left-column');
        this.itemsGrid = $('.js-schema-results.schema-grid__center-column');
        this.header = $('.schema-header');
        this.productGroup = $('.schema-header__title');
        this.catalogSwitcher = $('input[name="ko_unique_1"]');
        this.announcementsSwitcher = $('input[name="ko_unique_2"]');
        this.samsungCheckbox = $('input[value=samsung]');

        this.firstElementInGridA = element(by.xpath("/html//div[@id='schema-products']/div[1]/div[@class='schema-product']/div[@class='schema-product__part schema-product__part_1']/div[@class='schema-product__image']/a"));
        this.firstElementInGridIMG = this.firstElementInGridA.$('img');

        this.iframe = element(by.xpath("/html//div[@id='fast-search-modal']//iframe[@class='modal-iframe']"));
        this.iframeSearchField = element(by.xpath("//div[@id='search-page']/div[@class='search__bar']//input"));
	};
}

module.exports = CatalogPageTV;