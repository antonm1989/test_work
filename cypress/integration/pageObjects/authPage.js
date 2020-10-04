import basePage from "./basePage"

class authPage extends basePage{
    constructor() {
        this.pageUrl = 'https://www.sbzend.ssls.com/authorize'
        this.locators = {
            
        }
    }

    openPageURL() {
        cy.visit(this.pageUrl)
    }
   
}
export default authPage

