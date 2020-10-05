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

let userProfileDetails = {
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    supportPin: '',
    newsLetter: ''
}

const registeredUser = {
    email: 'ssls.automation+666@gmail.com',
    password: '123456'
}

const nonRegisteredUser = {
    email: 'random_email@gmail.com',
    password: '123456'
}

Given('I am not registered user', () => {
    user.email = nonRegisteredUser.email
    user.password = nonRegisteredUser.password
});

Given('I am registered user', () => {
    user.email = registeredUser.email
    user.password = registeredUser.password
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

When('I enter credentials', () => {
    authPage.getEmailInput().type(user.email)
    authPage.getPasswordInput().type(user.password)
});

When('I click on eye icon', () => {
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

When('I click dropdown triangle', () => {
    homePage.getDropdownTriangle().should('be.visible').click()
});

When('I select Profile', () => {
    homePage.getProfileDropdownOption().should('be.visible').click()
});

Then('I should see Profile page', () => {
    profilePage.getProfilePageHeader().should('be.visible')
});

Then('I should see Profile details', () => {

    profilePage.getEmailFieldText()
        .then((elementText) => {
            userProfileDetails.email = elementText
        })

    profilePage.getPhoneFieldText()
        .then((elementText) => {
            userProfileDetails.phone = elementText
        })

    profilePage.getNameFieldText1()
        .then((elementText) => {
            userProfileDetails.name = elementText
        })

    profilePage.getAddressFieldText()
        .then((elementText) => {
            userProfileDetails.address = elementText
        })

    profilePage.getSupportPinText()
        .then((elementText) => {
            userProfileDetails.supportPin = elementText
        })

    profilePage.getPasswordField()
        .then((elementText) => {
            if (elementText !== '') { userProfileDetails.password = 'true' }
            else { userProfileDetails.password = 'false' }
        })

    profilePage.getNewsLetterButton()
        .then((element) => {
            if (element.is("enabled")) { userProfileDetails.newsLetter = 'true' }
            else { userProfileDetails.newsLetter = 'false' }
        })
});

When('I select Log Out', () => {
    homePage.getLogOutDropdownOption().click()
});

Then('I should see the same Profile details as before', () => {
    profilePage.getEmailFieldText()
        .then((elementText) => {
            assert.equal(userProfileDetails.email, elementText)
        })

    profilePage.getPhoneFieldText()
        .then((elementText) => {
            assert.equal(userProfileDetails.phone, elementText)
        })

    profilePage.getNameFieldText1()
        .then((elementText) => {
            assert.equal(userProfileDetails.name, elementText)
        })

    profilePage.getAddressFieldText()
        .then((elementText) => {
            assert.equal(userProfileDetails.address, elementText)
        })

    profilePage.getSupportPinText()
        .then((elementText) => {
            assert.equal(userProfileDetails.supportPin, elementText)
        })

    profilePage.getPasswordField()
        .then((elementText) => {
            let passwordState
            if (elementText !== '') {
                passwordState = 'true'
            }
            else {
                passwordState = 'false'
            }
            assert.equal(userProfileDetails.password, passwordState)
        })

    profilePage.getNewsLetterButton()
        .then((element) => {
            let newsLetterState
            if (element.is("enabled")) { newsLetterState = 'true' }
            else { newsLetterState = 'false' }
            assert.equal(userProfileDetails.newsLetter, newsLetterState)
        })
});