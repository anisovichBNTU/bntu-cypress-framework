
Feature: Graduation Project

    Scenario: Edit graduation project topic
        Given I am logged in with password to the platform as test user
        When Select 'Graduation Project' module on header on Main page
        And Select "Темы проектов" tab on Course project page
        And Edit graduation project topic on Graduation project page
        Then I should see edited graduation project topic on Graduation project page
    