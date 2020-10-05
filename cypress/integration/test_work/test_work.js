import Home from '../pageObjects/homePage'
import User from '../pageObjects/user'
import Auth from '../pageObjects/authPage'
import Profile from '../pageObjects/profilePage'

const homePage = new Home()
const user = new User()
const authPage = new Auth()
const profilePage = new Profile

authPage.setupLocators()
homePage.setupLocators()
profilePage.setupLocators()

Given('I am not registered user', () => {
    user.email = 'random_email@gmail.com'
    user.password = '123456'
});

Given('I am registered user', () => {
    user.email = 'ssls.automation+666@gmail.com'
    user.password = '123456'
});

Given('I am logged in', () => {
    user.email = 'ssls.automation+666@gmail.com'
    user.password = '123456'
});

When('I open Home page', () => {
   
    homePage.openPageURL()
});

Then('I should see Home page', () => {
    homePage.getFooterElement().should('be.visible')
});

When('I click LOG IN text', () => {
    homePage.getLoginText().should('be.visible').click()
});

Then('I should see Authorization page', () => {
    authPage.getAuthPageHeader().should('be.visible')
});

Then('I should see credentials inputs', () => {
    authPage.getEmailInput().should('be.visible')
    authPage.getPasswordInput().should('be.visible')
});

When('I enter credentials and click on eye icon', () => {
    authPage.getEmailInput().type(user.email)
    authPage.getPasswordInput().type(user.password)
    authPage.getEyeIcon().should('be.visible').click()
});

Then('I should see entered password', () => {
    authPage.getPasswordInput().should('have.attr', 'type', 'text')
});

When('I click on Login button', () => {
    authPage.getLoginButton().should('be.visible').click()
});

Then('I should see error message', () => {
    authPage.getErrorMessage().should('be.visible')
});

Then('I should see User icon', () => {
    homePage.getLoggedInUserIcon().should('be.visible')
    homePage.getLoginText().should('not.be.visible')
});

When('I click dropdown triangle and select Profile', () => {
    homePage.getDropdownTriangle().should('be.visible').click()
    homePage.getProfileDropdownOption().should('be.visible').click()
});

Then('I should see Profile page', () => {
    profilePage.getProfilePageHeader().should('be.visible')
});

Then('I should see Profile details', () => {
   
    profilePage.getEmailFieldText()
        .then((myTxt) => {
            console.log(myTxt)
            
        })
    
});


