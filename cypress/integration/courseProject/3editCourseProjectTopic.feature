
Feature: Course Project

    Scenario: Edit course project topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Для тестов ИНC" subject on Subject page
        And Click "Курсовые проекты/работы" subject module on Subject page
        And Select "Темы проектов" tab on Course project page
        And Edit course project topic on Course project page
        Then I should see edited course project topic on Course project page
    