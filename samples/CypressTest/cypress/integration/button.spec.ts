/// <reference types="Cypress" />

context('Button', () => {
  it('should ghave button',()=>{
    cy.visit('/');
    cy.get('button').should('exist');
  })
});