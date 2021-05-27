
Feature: Course Project

    Scenario Outline: Student select course project topic
        Given I am logged in with password to the platform as <StudentUser>
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "Курсовые проекты/работы" subject module on Subject page
        And Select "Темы проектов" tab on Course project page
        And Select topic "<ProjectName>" on Course project page
        Then I should see assigned student "<Student>" to topic "<ProjectName>" on Course project page

        Examples:
            | ProjectName | Student                  | StudentUser          |
            | NormalValue | Autotest Test Student    | testStudentAutotest  |
            | ShortValue  | Autotest1 Test1 Student1 | testStudentAutotest1 |
            | LongValue   | Autotest2 Test2 Student2 | testStudentAutotest2 |