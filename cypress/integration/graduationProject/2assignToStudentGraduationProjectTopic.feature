
Feature: Graduation Project

    Scenario Outline: Assign graduation project topic to student
        Given I am logged in with password to the platform as test user
        When Select 'Graduation Project' module on header on Main page
        And Select "Темы проектов" tab on Course project page
        And Assign student "<Stedent>" from "<Group>" group to topic "<ProjectNamePart>" on Graduation project page
        Then I should see assigned student "<Stedent>" to topic "<ProjectNamePart>" on Graduation project page

        Examples:
            | ProjectNamePart | Stedent               | Group    |
            | autotest name   | Autotest Test Student | 10702217 |
            | SPN             | Тарасенко             | 10702217 |
            | Very Long Name  | Камадей               | 10702217 |
