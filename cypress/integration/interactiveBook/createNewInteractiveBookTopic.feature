
Feature: Interactive Book

    Scenario: Create new interactive book topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Для тестов ИНC" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Click add interactive book on Interactive book page
        And Create new book on Interactive book page
        Then I should see created book topic on Interactive book page
    