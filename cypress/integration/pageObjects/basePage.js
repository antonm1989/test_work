class basePage {
    constructor() {
        // this.pageUrl = ''
        this.locators = {
            footerSelector: 'footer.ssls-footer',
            wrongSelector: 'span.anton'
        }
    }

    openPageURL(url) {
        return cy.visit(url)
    }

}
export default basePage