'use strict';
const path = require("path");
const yargs = require("yargs").argv;
const fs = require("fs");

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://catalog.onliner.by/tv',
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: false,
        maxInstances: 2
    },

    specs: ['./features/**.feature'],
    
    onPrepare: function () {
        browser.driver.manage().window().maximize();
    },
    beforeLaunch: function () {
        const dir = path.resolve('./output/');
        console.log("Cleaning 'output' folder.");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        } else {
            fs.readdirSync(dir).forEach(file => fs.unlinkSync(path.resolve(dir + "/" + file)));
        }
    },

    SELENIUM_PROMISE_MANAGER: false,

    cucumberOpts: {
        require: path.resolve('./steps/**.js'),
        format: ['json:output/cucumber.json'],
        tags: [`${yargs.tag||"@smoke"}`],
        ignoreUncaughtExceptions: true
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework')
};