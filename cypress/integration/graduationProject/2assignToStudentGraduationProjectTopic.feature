
Feature: Graduation Project

    Scenario: Assign graduation project topic to student
        Given I am logged in with password to the platform as test user
        When Select 'Graduation Project' module on header on Main page
        And Select "Темы проектов" tab on Course project page
        And Assign student "Немкович" from "10701217" group to topic on Graduation project page
        Then I should see assigned student "Немкович" to topic on Graduation project page
    