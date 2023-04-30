describe('in.gr search test', () => {
    it('should display search results for "Selenium"', () => {
      // Navigate to the in.gr website
      cy.visit('https://www.in.gr');
  
      // Find the search input field, enter a search term, and submit the form
      cy.get('#searchtext')
        .type('Selenium')
        .type('{enter}');
  
      // Verify that search results are displayed
      cy.get('.searchresults').should('be.visible');
  
      // Verify that search results contain the expected search term
      const expectedTerm = 'Selenium';
      cy.get('.searchresults h3 a').each(result => {
        cy.wrap(result).should('contain', expectedTerm);
      });
  
      // Verify that search results show the expected number of results
      const expectedCount = 10;
      cy.get('.searchresults .result').should('have.length', expectedCount);
    });
    
  }); 
  