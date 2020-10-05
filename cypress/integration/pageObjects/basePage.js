class basePage {
    constructor() {
        // this.pageUrl = 'https://www.sbzend.ssls.com'
        this.locators = {
            footerSelector: 'footer.ssls-footer',
            wrongSelector: 'span.anton'
        }
    }

    
    openPageURL(url) {
        return cy.visit(url)
    }

    addLocator(newLocator, newValue) {
        return this.locators[newLocator] = newValue
    }

}
export default basePage