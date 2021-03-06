
Feature: Course Project

    Scenario Outline: Assign course project topic to student
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Subject for Autotests" subject on Subject page
        And Click "Курсовое проектирование" subject module on Subject page
        And Select "Темы проектов" tab on Course project page
        And Assign student "<Student>" to topic "<ProjectName>" on Course project page
        Then I should see assigned student "<Student>" to topic "<ProjectName>" on Course project page

        Examples:
            | ProjectName | Student                  | Group    |
            | NormalValue | Autotest1 Test1 Student1 | 10702217 |
            | ShortValue  | Autotest2 Test2 Student2 | 10702217 |
            | LongValue   | Autotest3 Test3 Student3 | 10702217 |
