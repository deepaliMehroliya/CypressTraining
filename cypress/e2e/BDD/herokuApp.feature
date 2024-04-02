Feature: This is A feature test login functionality on Niche Thyself.
Scenario: Login with Valid Credentials
    Given User is on Home Page
    When User Navigates to Authentication Page
    When User enters "tomsmith" and "SuperSecretPassword!"
    Then Message displayed "You logged into a secure area!"
