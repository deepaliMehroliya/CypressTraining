const { defineConfig } = require("cypress");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents,
    specPattern: ["**/*.feature", "**/*.cy.js"],
    env: {
      login_url: "https://alapanme.github.io/testing-cypress.html",
      frames_url: "https://the-internet.herokuapp.com"
    }

  },


});
