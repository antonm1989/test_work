class basePage {
    constructor() {
        this.locators = {
            footerSelector: 'footer.ssls-footer',
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