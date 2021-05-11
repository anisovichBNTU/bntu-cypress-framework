
Feature: Interactive Book

    Scenario: Add interactive book child topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Для тестов ИНC" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Select "Добавить новую тему" option on "autotest book" book context menu on Interactive book page
        And Create new book child topic "child topic" on Interactive book page
        Then I should see created book topic "child topic" on Interactive book page
        When Open book topic "child topic" on Interactive book page
        Then I should see book topic "child topic" in book content on Interactive book page
        When Open parent book topic "autotest book" on Interactive book page
        Then I should see book topic "autotest book, child topic" in book content on Interactive book page
    