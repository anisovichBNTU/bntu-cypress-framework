
Feature: Course Project

    Scenario Outline: Student select course project topic
        Given I am logged in with password to the platform as <StudentUser>
        When Select 'Subject' module on header on Main page
        And Select "Subject for Autotests" subject on Subject page
        And Click "Курсовое проектирование" subject module on Subject page
        And Select "Темы проектов" tab on Course project page
        And Select topic "<ProjectName>" on Course project page
        Then I should see assigned student "<Student>" to topic "<ProjectName>" on Course project page

        Examples:
            | ProjectName | Student                  | StudentUser          |
            | NormalValue | Autotest1 Test1 Student1 | testStudentAutotest1 |
            | ShortValue  | Autotest2 Test2 Student2 | testStudentAutotest2 |
            | LongValue   | Autotest3 Test3 Student3 | testStudentAutotest3 |