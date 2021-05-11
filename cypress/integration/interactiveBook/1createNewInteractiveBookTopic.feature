
Feature: Interactive Book

    Scenario: Create new interactive book topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Для тестов ИНC" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Click add interactive book on Interactive book page
        And Create new book "autotest book" on Interactive book page
        Then I should see created book topic "autotest book" on Interactive book page
        When Open book "autotest book" on Interactive book page
        Then I should see book topic "autotest book" in book content on Interactive book page
    