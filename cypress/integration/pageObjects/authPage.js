import basePage from "./basePage"

class authPage extends basePage {

    setupLocators() {
        super.addLocator("authPageHeader", "//h1[@class='page-title'][contains(text(),'Authorization')]")
        super.addLocator("enteredPassword", "//input[@name='password' and @type='text']")
        super.addLocator("eyeIcon", "span.icon-eye")
        super.addLocator("errorMessage", "//div[contains(text(),'Uh oh! Email or password is incorrect')]")
        super.addLocator("emailInput", "input[name=email]")
        super.addLocator("passwordInput", "input[name=password]")
        super.addLocator("loginButton", "//button[contains(text(),'Login')]")
    }

    openPageURL() {
        this.pageUrl = 'https://www.ssls.com/authorize'
        super.openPageURL(this.pageUrl)
    }

    getAuthPageHeader() {
        return cy.xpath(this.locators.authPageHeader)
    }

    getEmailInput() {
        return cy.get(this.locators.emailInput)
    }

    getPasswordInput() {
        return cy.get(this.locators.passwordInput)
    }

    getEyeIcon() {
        return cy.get(this.locators.eyeIcon)
    }

    getLoginButton() {
        return cy.xpath(this.locators.loginButton)
    }

    getErrorMessage() {
        return cy.xpath(this.locators.errorMessage)
    }
}
export default authPage

