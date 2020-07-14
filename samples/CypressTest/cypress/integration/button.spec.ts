/// <reference types="Cypress" />

context('Button', () => {
  it('should have button',()=>{
    cy.visit('/');
    cy.get('button').should('exist');
  })
});