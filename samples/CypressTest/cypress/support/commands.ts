/// <reference types="Cypress" />

Cypress.Commands.add('checkPlaceholder', (name) => {
  cy.get(`[name='${name}']`).click();
  cy.get('mat-form-field.mat-focused').should('exist');
});
