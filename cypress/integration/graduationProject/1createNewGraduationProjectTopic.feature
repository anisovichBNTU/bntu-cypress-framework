
Feature: Graduation Project

    Scenario: Create new graduation project topic
        Given I am logged in with password to the platform as test user
        When Select 'Graduation Project' module on header on Main page
        And Select "Темы проектов" tab on Course project page
        And Add new graduation project topic on Graduation project page
        And Fill new graduation project topic info on Graduation project page
        Then I should see created graduation project topic on Graduation project page
    