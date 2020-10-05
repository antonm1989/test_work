import Home from '../pageObjects/homePage'
import User from '../pageObjects/user'
import Auth from '../pageObjects/authPage'
import Profile from '../pageObjects/profilePage'

const homePage = new Home()
const user = new User()
const authPage = new Auth()
const profilePage = new Profile()

authPage.setupLocators()
homePage.setupLocators()
profilePage.setupLocators()

let profileDetails = {

    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    supportPin: '',
    newsLetter: ''
}

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
            profileDetails.email = myTxt
            console.log("email: " + profileDetails.email)
        })

    profilePage.getPhoneFieldText()
        .then((myTxt) => {
            console.log("phone: " + myTxt)
            profileDetails.phone = myTxt
        })

    profilePage.getNameFieldText1()
        .then((myTxt) => {
            console.log("name: " + myTxt)
            profileDetails.name = myTxt
        })

    profilePage.getAddressFieldText()
        .then((myTxt) => {
            console.log("address: " + myTxt)
            profileDetails.address = myTxt
        })

    profilePage.getSupportPinText()
        .then((myTxt) => {
            console.log("pin: " + myTxt)
            profileDetails.supportPin = myTxt
        })

    profilePage.getPasswordField()
        .then((myTxt) => {
            if (myTxt !== '') { profileDetails.password = 'true' }
            else { profileDetails.password = 'false' }
            console.log("password is not empty: " + profileDetails.password)
        })

    profilePage.getNewsLetterButton()
        .then((x) => {
            if (x.is("enabled")) { profileDetails.newsLetter = 'true' }
            else { profileDetails.newsLetter = 'false' }
            console.log("newsLetter status: " + profileDetails.newsLetter)
        })
});

When('I click dropdown triangle and select Log Out', () => {
    homePage.getDropdownTriangle().should('be.visible').click()
    homePage.getLogOutDropdownOption().click()
});

Then('I should see the same Profile details as before', () => {
    profilePage.getEmailFieldText()
        .then((myTxt) => {
            assert.equal(profileDetails.email, myTxt)
        })

    profilePage.getPhoneFieldText()
        .then((myTxt) => {
            assert.equal(profileDetails.phone, myTxt)
        })

    profilePage.getNameFieldText1()
        .then((myTxt) => {
            assert.equal(profileDetails.name, myTxt)
        })

    profilePage.getAddressFieldText()
        .then((myTxt) => {
            assert.equal(profileDetails.address, myTxt)
        })

    profilePage.getSupportPinText()
        .then((myTxt) => {
            assert.equal(profileDetails.supportPin, myTxt)
        })

    profilePage.getPasswordField()
        .then((myTxt) => {
            let passwordState
            if (myTxt !== '') {
                passwordState = 'true'
            }
            else {
                passwordState = 'false'
            }
            assert.equal(profileDetails.password, passwordState)
        })

    profilePage.getNewsLetterButton()
        .then((x) => {
            let newsLetterState
            if (x.is("enabled")) { newsLetterState = 'true' }
            else { newsLetterState = 'false' }
            assert.equal(profileDetails.newsLetter, newsLetterState)
        })
});