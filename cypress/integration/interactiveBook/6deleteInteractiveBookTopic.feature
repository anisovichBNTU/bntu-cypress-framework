
Feature: Interactive Book

    Scenario: Delete interactive book topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Select "Удалить" option on "autotest book edited" book context menu on Interactive book page
        Then I should see deleted book topic "autotest book edited" on Interactive book page
        
    