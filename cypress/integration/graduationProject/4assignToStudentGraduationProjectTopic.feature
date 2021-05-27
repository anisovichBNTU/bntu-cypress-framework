
Feature: Graduation Project

    Scenario Outline: Assign graduation project topic to student
        Given I am logged in with password to the platform as test user
        When Select 'Graduation Project' module on header on Main page
        And Select "Темы проектов" tab on Graduation project page
        And Assign student "<Student>" from "<Group>" group to topic "<ProjectName>" on Graduation project page
        Then I should see assigned student "<Student>" to topic "<ProjectName>" on Graduation project page

        Examples:
            | ProjectName | Student                  | Group    |
            | NormalValue | Autotest1 Test1 Student1 | 10702217 |
            | ShortValue  | Autotest2 Test2 Student2 | 10702217 |
            | LongValue   | Autotest3 Test3 Student3 | 10702217 |