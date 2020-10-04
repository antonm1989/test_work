import basePage from "./basePage"

class homePage extends basePage {
    constructor() {
        this.pageUrl = 'https://www.sbzend.ssls.com'
        this.locators["loginSelector"] = "//span[contains(text(),'Log in')]"

        // this.locators = {
        //     loginSelector: "//span[contains(text(),'Log in')]"            

        // }
    }

    // openPageURL() {
    //     cy.visit(this.pageUrl)
    // }

    openPageURL() {
        super.openPageURL(this.pageUrl)
    }

    footerElement() {
        return cy.get(this.locators.footerSelector)

    }

    loginSelector() {
        return cy.xpath(this.locators.loginSelector)
    }
}
export default homePage

