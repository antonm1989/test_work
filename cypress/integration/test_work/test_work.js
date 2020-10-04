Given('I open home page', () => {
    cy.visit('https://www.sbzend.ssls.com')
});
Then('I should see home page', () => {
    // cy.contains('Cheap', {timeout:10000}).should('be.visible')
    cy.get('span.ssls-toolbar__btn-text').should('be.visible')
});