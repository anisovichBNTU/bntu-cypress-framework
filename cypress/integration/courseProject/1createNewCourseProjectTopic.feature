
Feature: Course Project

    Scenario: Create new course project topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "Курсовые проекты/работы" subject module on Subject page
        And Select "Темы проектов" tab on Course project page
        And Add new course project topic on Course project page
        And Fill new course project topic info on Course project page
        Then I should see created course project topic on Course project page
    