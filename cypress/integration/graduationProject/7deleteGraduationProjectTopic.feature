
Feature: Graduation Project

    Scenario Outline: Delete graduation project topic
        Given I am logged in with password to the platform as test user
        When Select 'Graduation Project' module on header on Main page
        And Select "Темы проектов" tab on Graduation project page
        And Cancel assignment student to edited topic "<ProjectName>" on Graduation project page
        Then I should see unassigned student "<Student>" to edited topic "<ProjectName>" on Graduation project page
        When Delete topic "<ProjectName>" on Graduation project page
        Then I should see deleted graduation project topic "<ProjectName>" on Graduation project page

        Examples:
            | ProjectName | Student                  |
            | NormalValue | Autotest Test Student    |
            | ShortValue  | Autotest1 Test1 Student1 |
            | LongValue   | Autotest2 Test2 Student2 |