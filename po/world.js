'use strict';

const CatalogPageTV = require('./pages/CatalogPageTV');
// const baseUrl = browser.baseUrl;

class World {
	constructor (){
		this.CatalogPageTV = new CatalogPageTV();
		//this.CatalogUrl = `^${browser.baseUrl}$`;
	}
}

module.exports = new World();