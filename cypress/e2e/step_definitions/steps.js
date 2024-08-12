import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the Advantage Online Shopping homepage', () => {
  cy.visit('https://advantageonlineshopping.com/#/');
});

When('I search for {string}', (product) => {
  cy.get('#searchBox').type(product);
  cy.get('#searchButton').click();
});

Then('I should see search results for {string}', (product) => {
  cy.get('.product').should('contain', product);
});

When('I add the first product to the cart', () => {
  cy.get('.product').first().click();
  cy.get('#addToCartButton').click();
});

Then('the product should be in the cart', () => {
  cy.get('#cart').click();
  cy.get('.cart-item').should('exist');
});

When('I proceed to checkout', () => {
  cy.get('#checkoutButton').click();
});

Then('I should see the product in the payment screen', () => {
  cy.get('.payment-summary').should('contain', 'Laptop');
});
