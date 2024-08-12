const { defineConfig } = require('cypress');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Adicione o preprocessor aqui
      addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: '**/*.feature',
  },
});