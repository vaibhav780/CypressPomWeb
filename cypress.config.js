const { defineConfig } = require("cypress");

module.exports = defineConfig({
env:{
    app_URL:'https://www.saucedemo.com/v1/'
},

retries:1,
video:true,
  reporter:'cypress-mochawesome-reporter',
  reporterOptions:{
    reportDir:'cypress/reports/sauceDemo-test',
    charts:true,
    reportPageTitle:'SauceDemo Tests',
    embeddedScreenshots:true,
    inlineAssets:true,
    overwrite:true,
    autoOpen:false,
    timestamp:'longDate',
    showPassed:true,
    saveAllAttempts:false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
    },
  },
});
