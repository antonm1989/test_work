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
        // this.pageUrl = 'https://www.sbzend.ssls.com/user/profile'
        this.pageUrl = 'https://www.ssls.com/user/profile'
        super.openPageURL(this.pageUrl)
    }

    getProfilePageHeader() {
        return cy.xpath(this.locators.profilePageHeader)
    }

    getEmailFieldText() {
        return cy.get(this.locators.emailField).then((x) => {
            const myText = x.text()
            return myText
        })
    }

    getNameFieldText1() {
        return cy.get(this.locators.nameField).then((x) => {
            const myText = x.text()
            return myText
        })
    }

    getPasswordField() {
        return cy.get(this.locators.passwordField).then((x) => {
            const myText = x.text()
            return assert.notEqual(myText, '')
        })
    }

    getPhoneFieldText() {
        return cy.get(this.locators.phoneField).then((x) => {
            const myText = x.text()
            return myText
        })
    }

    getAddressFieldText() {
        return cy.get(this.locators.addressField).then((x) => {
            const myText = x.text()
            return myText
        })
    }

    getSupportPinText() {
        return cy.xpath(this.locators.supportPinField).then((x) => {
            const myText = x.text()
            return myText
        })
    }

    getNewsLetterButton() {
        return cy.get(this.locators.newsletterSwitch).then((x) => {
            return x
        })
        // return cy.get(this.locators.newsletterSwitch).should('be.checked')
    }



}
export default profilePage