'use strict';

const BasePage = require("./BasePage");

class CatalogPageTV extends BasePage{
	constructor (){
		super();

        this.leftMenu = $('.schema-grid__left-column');
        this.itemsGrid = $('.js-schema-results.schema-grid__center-column');
        this.header = $('.schema-header');
        this.productGroup = $('.schema-header__title')
        this.catalogSwitcher = $('.schema-filter-control__switcher-inner')
	};
}

module.exports = CatalogPageTV;