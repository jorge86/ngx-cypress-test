describe('Google Search', () => {
  it('should land on the homepage, accept cookies, make a search, and assert results', () => {
    cy.visit('https://www.google.com/');
    cy.contains('Αποδοχή όλων').click();
    cy.url().should('eq', 'https://www.google.com/');
    cy.get('input[name="q"]').type('cypress.io{enter}');
    cy.url().should('include', 'search');
    cy.get('#search').should('be.visible');
    cy.get('#result-stats').should('be.visible');
  });
});
