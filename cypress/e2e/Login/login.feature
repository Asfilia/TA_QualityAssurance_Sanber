Feature: Login Feature

    Scenario: TC_LOG_001 Login dengan Valid Username dan Password
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit Password
        Then I Click Button Login
        Then I Verify Login Success

    Scenario: TC_LOG_002 login dengan Username invalid dan Password valid
        Given I Visit URL
        When I should see Homepage
        When I Submit Username Invalid
        When I Submit Password
        Then I Click the Second Button Login
        Then I Verify Invalid Credentials

    Scenario: TC_LOG_003 login dengan Username Symbol dan Password valid
        Given I Visit URL
        When I should see Homepage
        When I Submit Username Symbol
        When I Submit Password
        Then I Click the Second Button Login
        Then I Verify Invalid Credentials

    Scenario: TC_LOG_004 login dengan Username Sensitif Case dan Password valid
        Given I Visit URL
        When I should see Homepage
        When I Submit Username Sensitif Case
        When I Submit Password
        Then I Click the Second Button Login
        Then I Verify Invalid Credentials

    Scenario: TC_LOG_005 login dengan Username Empty dan Password valid
        Given I Visit URL
        When I should see Homepage
        When I Submit Username Empty
        When I Submit Password
        Then I Click the Second Button Login
        Then I Verify Required Message

    Scenario: TC_LOG_006 login dengan Username Enter dan Password valid
        Given I Visit URL
        When I should see Homepage
        When I Submit Username Enter
        Then I Verify Required Message
    
    Scenario: TC_LOG_007 login dengan Username dan Password Invalid
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit Password Invalid
        Then I Click the Second Button Login
        Then I Verify Invalid Credentials

    Scenario: TC_LOG_008 login dengan Username Valid dan Password Symbol 
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit Password Symbol
        Then I Click the Second Button Login
        Then I Verify Invalid Credentials

    Scenario: TC_LOG_009 login dengan Username Valid dan Password Empty 
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit Password Empty
        Then I Click the Second Button Login
        Then I Verify Required Message

    Scenario: TC_LOG_010 login dengan Username Valid dan Password Sensitif Case
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit Password Sensitif Case
        Then I Click the Second Button Login
        Then I Verify Invalid Credentials

    Scenario: TC_LOG_011 login dengan Username dan Password Valid Enter
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit Password Enter
        Then I Click the Third Button Login
        Then I Verify Login Success

    Scenario: TC_LOG_012 Login Menggunakan Tombol Enter Setelah Input Valid Username
        Given I Visit URL
        When I should see Homepage
        When I Should See Forgot Password
        Then I Click Forgot Password
        Then I Verify Dashboard Reset Password
    
    Scenario: TC_LOG_013 Login dengan Copy Username dan Password dari Notepad
        Given I Visit URL
        When I should see Homepage
        When I Submit Username
        When I Submit Password
        Then I Click Button Login
        Then I Verify Login Success

