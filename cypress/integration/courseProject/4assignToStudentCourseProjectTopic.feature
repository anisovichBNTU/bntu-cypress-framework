
Feature: Course Project

    Scenario Outline: Assign course project topic to student
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "Курсовые проекты/работы" subject module on Subject page
        And Select "Темы проектов" tab on Course project page
        And Assign student "<Student>" to topic "<ProjectName>" on Course project page
        Then I should see assigned student "<Student>" to topic "<ProjectName>" on Course project page

        Examples:
            | ProjectName | Student                  | Group    |
            | NormalValue | Autotest Test Student    | 10702217 |
            | ShortValue  | Autotest1 Test1 Student1 | 10702217 |
            | LongValue   | Autotest2 Test2 Student2 | 10702217 |
