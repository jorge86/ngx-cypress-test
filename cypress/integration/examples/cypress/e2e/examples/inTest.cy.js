describe('Google Search', () => {
  it('should land on the homepage, accept cookies, make a search, and assert results', () => {
    cy.visit('https://www.google.com/');
    //cy.get('.QS5gu sy4vM').click();
    cy.xpath('/html[1]/body[1]/div[2]/div[2]/div[3]/span[1]/div[1]/div[1]/div[1]/div[3]/div[1]/button[2]/div[1]').click();
    cy.url().should('eq', 'https://www.google.com/');
    cy.get('input[name="q"]').type('cypress.io{enter}');
    cy.url().should('include', 'search');
    cy.get('#search').should('be.visible');
    cy.get('#result-stats').should('be.visible');
  });
});
