/// <reference types="Cypress" />
context('Actions', () => {
    it('should get title',()=>{
        cy.visit('/');
        cy.get('h1').should('contain','Welcome to Devon4ngAngularElementsTest!');
    })
});