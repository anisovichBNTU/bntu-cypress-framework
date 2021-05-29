
Feature: Course Project

    Scenario Outline: Delete course project topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Subject for Autotests" subject on Subject page
        And Click "Курсовые проекты/работы" subject module on Subject page
        And Select "Темы проектов" tab on Course project page
        And Cancel assignment student to edited topic "<ProjectName>" on Course project page
        Then I should see unassigned student "<Student>" to edited topic "<ProjectName>" on Course project page
        When Delete topic "<ProjectName>" on Course project page
        Then I should see deleted course project topic "<ProjectName>" on Course project page

        Examples:
            | ProjectName | Student                  |
            | NormalValue | Autotest1 Test1 Student1 |
            | ShortValue  | Autotest2 Test2 Student2 |
            | LongValue   | Autotest3 Test3 Student3 |