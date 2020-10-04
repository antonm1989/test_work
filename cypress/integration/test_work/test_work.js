import Home from '../pageObjects/homePage'
import User from '../pageObjects/user'

const homePage = new Home()
const user = new User()

Given('I am not registered user', () => {
    user.email='random_email@gmail.com'
    user.password='123456'
});

When('I open Home page', () => {
    homePage.openPageURL()
});

Then('I should see Home page', () => {
    homePage.footerElement().should('be.visible')
});

// Then('I should see button with LOG IN text', ()=> {
//     homePage.loginButton().should('be.visible').click()   
// });

When('I click LOG IN text', ()=> {
    homePage.loginSelector().should('be.visible').click()   
    
});

Then('I should see Authorization page', ()=> {
    
});

Then('I should see credentials inputs', ()=> {
    
});

When('I enter credentials and click on eye icon', ()=> {
    
});

Then('I should see entered password', () =>{
    
});

When('I click on Login button', ()=> {
    
});

Then('I should see error message', ()=> {
    
});
// var locators = {
//     loginSelector: "//span[contains(text(),'Log in')]",
//     authPage: 'h1.page-title',
//     footerSelector: 'footer.ssls-footer',
//     enteredPassword: "//input[@name='password' and @type='text']",
//     loginButton: "//button[contains(text(),'Login')]",
//     eyeIcon: 'span.icon-eye',
//     errorMessage: "//div[contains(text(),'Uh oh! Email or password is incorrect')]",
//     errorMessage2: "//div[contains(text(),'Uh odfdh! Email or password is incorrect')]",
//     loggedInUserIcon: "//span[contains(text(),'ssls.automation+666@gmail.com')]",
//     dropdown: "div.ssls-dropdown__holder ssls-dropdown__holder--toolbar",
//     wrongSelector: 'span.anton'
// }
