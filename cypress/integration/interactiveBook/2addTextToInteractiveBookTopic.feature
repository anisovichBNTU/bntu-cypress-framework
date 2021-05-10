
Feature: Interactive Book

    Scenario: Add text to interactive book topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Для тестов ИНC" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Open book to fill content on Interactive book page
        And Fill content to book on Interactive book page
        And Save book content on Interactive book page
        Then I should see correct book content with text on Interactive book page
    