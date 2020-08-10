context('Button page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should have button',()=>{
    cy.get('button').should('exist');
  });
  it('should contain Submit',()=>{
    cy.contains('button', 'Submit');
  });
});