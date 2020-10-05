Feature: Test work
    Not registered user tries to authorize and gets an error
    Registered user can authorize succesfully
    Authorized user can see profile settings

    Scenario: Authorization page. Not registered user
        Given I am not registered user
        When I open Home page
        Then I should see Home page
        When I click LOG IN text
        Then I should see Authorization page
        And I should see credentials inputs
        When I enter credentials
        And I click on eye icon
        Then I should see entered password
        When I click on Login button
        Then I should see error message

    Scenario: Authorization page (Welcome back!)
        Given I am registered user
        When I open Home page
        Then I should see Home page
        When I click LOG IN text
        Then I should see Authorization page
        And I should see credentials inputs
        When I enter credentials
        And I click on eye icon
        Then I should see entered password
        When I click on Login button
        Then I should see User icon

    Scenario: My profile page. Client area
        Given I am registered user
        When I open Home page
        And I click LOG IN text
        And I enter credentials
        And I click on Login button
        Then I should see User icon
        When I click dropdown triangle
        And I select Profile
        Then I should see Profile page
        And I should see Profile details
        When I click dropdown triangle
        And I select Log Out
        Then I should see Authorization page
        And I should see credentials inputs
        When I enter credentials
        And I click on Login button
        Then I should see User icon
        When I click dropdown triangle
        And I select Profile
        Then I should see Profile page
        And I should see the same Profile details as before