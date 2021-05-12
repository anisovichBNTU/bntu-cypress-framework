
Feature: Course Project

    Scenario: Assign course project topic to student
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "Курсовые проекты/работы" subject module on Subject page
        And Select "Темы проектов" tab on Course project page
        And Assign student "Autotest Test Student" to topic on Course project page
        Then I should see assigned student "Autotest Test Student" to topic on Graduation project page
    