Feature: Dashboard Feature

    Scenario: Search Username
        Given I Visit LoginPage
        When I Input Username
        When I Input Password
        Then I Click Button LoginPage
        Then I Verify Login Success
        Then I Click Admin Page
        Then I Verify Admin Page
        Then I see Tabel Data
        When I Search Username
        Then I Click Button Search

    Scenario: Select User Role Admin
        Given I Visit LoginPage
        When I Input Username
        When I Input Password
        Then I Click Button LoginPage
        Then I Verify Login Success
        Then I Click Admin Page
        Then I Verify Admin Page
        When I Select User Role Admin
        Then I Click Button Search
        Then I see Tabel Data

    Scenario: Select User Role ESS
        Given I Visit LoginPage
        When I Input Username
        When I Input Password
        Then I Click Button LoginPage
        Then I Verify Login Success
        Then I Click Admin Page
        Then I Verify Admin Page
        When I Select User Role ESS
        Then I Click Button Search
        Then I see Tabel Data

    Scenario: Select Status Enabled
        Given I Visit LoginPage
        When I Input Username
        When I Input Password
        Then I Click Button LoginPage
        Then I Verify Login Success
        Then I Click Admin Page
        Then I Verify Admin Page
        When I Select Status Enabled
        Then I Click Button Search
        Then I see Tabel Data

    Scenario: Select Status Disabled
        Given I Visit LoginPage
        When I Input Username
        When I Input Password
        Then I Click Button LoginPage
        Then I Verify Login Success
        Then I Click Admin Page
        Then I Verify Admin Page
        When I Select Status Disabled
        Then I Click Button Search
        Then I see Tabel Data
    
    
