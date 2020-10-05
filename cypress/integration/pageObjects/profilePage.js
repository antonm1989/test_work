/// <reference types = "Cypress" />

import basePage from "./basePage"
import homePage from "./homePage"

class profilePage extends basePage {
    setupLocators() {
        super.addLocator("profilePageHeader", "//h1[@class='page-title'][contains(text(),'Profile')]")
        super.addLocator("nameField", "//div[contains(@ng-class,'name')]/div[@class='description']/span")
        super.addLocator("emailField", "span[ng-hide*=\"activeRow === \'email\'\"]")
        super.addLocator("passwordField")
        super.addLocator("phoneField")
        super.addLocator("addressField")
        super.addLocator("supportPinField")
        super.addLocator("newsletterSwitch")
    }

    openPageURL() {
        this.pageUrl = 'https://www.sbzend.ssls.com/user/profile'
        super.openPageURL(this.pageUrl)
    }

    getProfilePageHeader() {
        return cy.xpath(this.locators.profilePageHeader)
    }

    getEmailField() {
        return cy.get(this.locators.emailField).invoke('val')
    }
    getEmailFieldText() {
        return cy.get(this.locators.emailField).then((x) => {
            const poo = x.text()
            return poo
        })

        // return cy.get(this.locators.emailField).then(($text) => {
        //     const txt = $text.text()


        // })
        // return homePage.email
    }


}
export default profilePage