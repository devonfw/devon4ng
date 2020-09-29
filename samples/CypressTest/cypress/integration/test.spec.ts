/// <reference path="../support/index.d.ts" />

context('Title', () => {
  it('should get title',()=>{
    cy.visit('/');
    cy.get('h1').should('contain','Welcome to Devon4ngAngularElementsTest!');
  })
  it('should change title when viewport is less than 320px', ()=>{
    cy.get('.title-l').should('be.visible');
    cy.get('.title-s').should('not.be.visible');
    cy.viewport(320, 480);
    cy.get('.title-l').should('not.be.visible');
    cy.get('.title-s').should('be.visible');
  })
  it('input name should move up on click',()=>{
    cy.checkPlaceholder('name');
    cy.checkPlaceholder('description');
  })
});