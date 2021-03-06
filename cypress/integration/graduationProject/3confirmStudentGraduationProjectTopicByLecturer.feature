
Feature: Graduation Project

    Scenario Outline: Confirm student on graduation project topic
        Given I am logged in with password to the platform as test user
        When Select 'Graduation Project' module on header on Main page
        And Select "Темы проектов" tab on Graduation project page
        And Confirm student on topic "<ProjectName>" on Graduation project page
        Then I should see assigned student "<Student>" to topic "<ProjectName>" on Graduation project page
        When Cancel assignment student to topic "<ProjectName>" on Graduation project page
        Then I should see unassigned student "<Student>" to topic "<ProjectName>" on Graduation project page

        Examples:
            | ProjectName | Student                  |
            | NormalValue | Autotest1 Test1 Student1 |
            | ShortValue  | Autotest2 Test2 Student2 |
            | LongValue   | Autotest3 Test3 Student3 |