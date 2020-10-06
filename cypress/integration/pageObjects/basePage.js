class basePage {
    constructor() {
        this.locators = {
            footerSelector: 'footer.ssls-footer',
        }
    }

    openPageURL(url) {
        return cy.visit(url)
    }

    addLocator(newLocatorName, newLocatorValue) {
        this.locators[newLocatorName] = newLocatorValue
    }

    getElementText(elementLocator) {
        if (elementLocator.startsWith('//')) {
            return cy.xpath(elementLocator).then((element) => {
                const elementText = element.text()
                return elementText
            })
        } else {
            return cy.get(elementLocator).then((element) => {
                const elementText = element.text()
                return elementText
            })

        }
    }
}
export default basePage