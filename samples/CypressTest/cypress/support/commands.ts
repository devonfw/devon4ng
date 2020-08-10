/// <reference types="Cypress" />

Cypress.Commands.add('checkPlaceholder', (name) => {
  cy.get(`[name=${name}]`)
    .click()
    .then(()=>{
      cy.get(`[name=${name}]`).should('have','class','mat-focused');
    })
})