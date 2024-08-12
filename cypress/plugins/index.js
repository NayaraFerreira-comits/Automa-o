const { defineConfig } = require('cypress');
const { devServer } = require('@cypress/webpack-dev-server');
const webpack = require('@cypress/webpack-preprocessor');
const { Preprocessor } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', Preprocessor());
      return config;
    },
  },
});
