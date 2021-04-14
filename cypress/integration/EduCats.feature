
Feature: Test

    Scenario: Open EduCats main page
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Для тестов ИНC" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
