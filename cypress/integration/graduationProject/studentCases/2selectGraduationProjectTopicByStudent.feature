
Feature: Graduation Project

    Scenario: Student select graduation project topic (Student cases)
        Given I am logged in with password to the platform as student
        When Go to 'Graduation Project' module by Link
        And Select "Темы проектов" tab on Course project page
        And Select topic on Graduation project page
        Then I should see assigned student "Autotest Test Student" to topic on Graduation project page
    