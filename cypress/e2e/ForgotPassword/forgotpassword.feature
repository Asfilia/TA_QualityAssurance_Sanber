Feature: Forgot Password Feature

    Scenario: Reset Password Berhasil
        Given I Visit URL
        When I should see Homepage Forgot Password
        When I Input Username
        Then I Click Button Reset Password
        Then I Verify Reset Password link sent successfully

    Scenario: Username Empty
        Given I Visit URL
        When I should see Homepage Forgot Password
        When I Input Username Empty
        When I Click the Second Button Reset Password
        Then I Verify Required Message

    Scenario: Reset Password with Keyboard Enter
        Given I Visit URL
        When I should see Homepage Forgot Password
        When I Input Username Enter
        Then I Verify Reset Password link sent successfully

    Scenario: Verifikasi Button Cancel
        Given I Visit URL
        When I should see Homepage Forgot Password
        Then I Click Button Cancel
        Then I Verify Login Homepage
