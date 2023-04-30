describe('Google', () => {
  it('should load the homepage and search', () => {
    cy.visit('https://www.google.com')

    // Verify that we landed on the Google homepage
    cy.title().should('eq', 'Google')

    // Type a search query and press Enter
    cy.get('[name="q"]').type('Cypress.io{enter}')

    // Verify that we landed on the search results page
    cy.title().should('eq', 'Cypress.io - Google Search')

    // Verify that there are search results displayed
    cy.get('#search').should('be.visible')
  })
})
