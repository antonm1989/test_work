import basePage from "./basePage"

class homePage extends basePage {
    
    setupLocators() {
        super.addLocator("loginText" , "//span[contains(text(),'Log in')]")
        super.addLocator("loggedInUserIcon", "//span[contains(text(),'ssls.automation+666@gmail.com')]")
        super.addLocator("dropdownTriangle","//i[@class='ssls-icon ssls-icon-user-circle']")
        super.addLocator("profileDropdownOption", "//a[@href='/user/profile']")
        // a[href='/user/profile']
    }
    
    openPageURL() {
        this.pageUrl = 'https://www.sbzend.ssls.com'
        super.openPageURL(this.pageUrl)
    }

    getFooterElement() {
        return cy.get(this.locators.footerSelector)
    }

    getLoginText() {
        return cy.xpath(this.locators.loginText)
    }

    getLoggedInUserIcon(){
        return cy.xpath(this.locators.loggedInUserIcon)
    }

    getDropdownTriangle(){
        return cy.xpath(this.locators.dropdownTriangle)
    }

    getProfileDropdownOption(){
        return cy.xpath(this.locators.profileDropdownOption)
    }
}
export default homePage

