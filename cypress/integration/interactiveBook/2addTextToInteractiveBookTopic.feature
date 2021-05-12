
Feature: Interactive Book

    Scenario: Add text to interactive book topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Open book topic "autotest book" to fill content on Interactive book page
        And Fill content to book on Interactive book page
        And Save book content on Interactive book page
        Then I should see book topic "autotest book" in book content on Interactive book page
        Then I should see correct book content on Interactive book page
    