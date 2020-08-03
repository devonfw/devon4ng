/// <reference path="../support/index.d.ts" />

context('Title', () => {
  it('should get title',()=>{
    cy.visit('/');
    cy.get('h1').should('contain','Welcome to Devon4ngAngularElementsTest!');
  })

  it('input name should move up on click',()=>{
    cy.checkPlaceholder('name');
    cy.checkPlaceholder('description');
  })
});