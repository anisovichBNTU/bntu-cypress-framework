
Feature: Interactive Book

    Scenario: Edit interactive book topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Для тестов ИНC" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Select "Переименовать" option on "autotest book" book context menu on Interactive book page
        And Edit book topic using name "autotest book edited" on Interactive book page
        Then I should see created book topic "autotest book edited" on Interactive book page
        When Open book topic "autotest book edited" on Interactive book page
        Then I should see book topic "autotest book edited" in book content on Interactive book page
        
    