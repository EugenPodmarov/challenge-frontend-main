describe('Index page', () => {
  // Visits the page before each test
  beforeEach(() => {
    cy.log('Visiting the homepage');
    cy.visit('/');
  });

  it('should have a logo', () => {
    cy.get('.header__inner').should('have.length', 1);
  });
});
