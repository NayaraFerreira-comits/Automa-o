const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.feature$/,
        use: [
          {
            loader: '@badeball/cypress-cucumber-preprocessor/loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@cucumber/cucumber': path.resolve(__dirname, 'node_modules/@cucumber/cucumber'),
    },
  },
};
