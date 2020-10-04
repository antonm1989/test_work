Feature: Test work
    Not registered user tries to authorize and gets an error
    Registered user can authorize succesfully
    Authorized user can edit profile settings

    Scenario: Authorization page. Not registered user
        Given I am not registered user
        When I open Home page
        Then I should see Home page
        # And I should see button with LOG IN text
        When I click LOG IN text
        # Then I should see Authorization page
        # And I should see credentials inputs
        # When I enter credentials and click on eye icon
        # Then I should see entered password
        # When I click on Login button
        # Then I should see error message

    # Scenario: Authorization page (Welcome back!)
    #     Given I am registered user
    #     When I open Home page
    #     Then I should see Home page
    #     When I click LOG IN text
    #     Then I should see Authorization page
    #     And I should see credentials inputs
    #     When I enter credentials and click on eye icon
    #     Then I should see entered password
    #     When I click on Login button
    #     Then I should see User button

    # Scenario: My profile page. Client area
    #     Given I am logged in
    #     When I click Profile in drop-down menu
    #     Then I should see Profile page