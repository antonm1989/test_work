import basePage from "./basePage"
import homePage from "./homePage"

class profilePage extends basePage {
    setupLocators() {
        super.addLocator("profilePageHeader", "//h1[@class='page-title'][contains(text(),'Profile')]")
        super.addLocator("nameField", "span[ng-hide*=\"activeRow === \'name\'\"]")
        super.addLocator("emailField", "span[ng-hide*=\"activeRow === \'email\'\"]")
        super.addLocator("passwordField", "span[ng-hide*=\"activeRow === \'password\'\"]")
        super.addLocator("phoneField", "span[ng-hide*=\"activeRow === \'phone\'\"]")
        super.addLocator("addressField", "span[ng-hide*=\"activeRow === \'address\'\"]")
        super.addLocator("supportPinField", "//div[contains(@ng-class,'pin')]/div[contains(concat(' ',normalize-space(@class),' '),' description')]/span")
        super.addLocator("newsletterSwitch", "button.toggle-btn")
    }

    openPageURL() {
        this.pageUrl = 'https://www.ssls.com/user/profile'
        super.openPageURL(this.pageUrl)
    }

    getProfilePageHeader() {
        return cy.xpath(this.locators.profilePageHeader)
    }

    getPasswordField() {
        return cy.get(this.locators.passwordField).then((element) => {
            const elementText = element.text()
            return assert.notEqual(elementText, '')
        })
    }

    getNewsLetterButton() {
        return cy.get(this.locators.newsletterSwitch).then((element) => {
            return element
        })
    }
}
export default profilePage