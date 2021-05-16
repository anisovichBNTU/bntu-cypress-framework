
Feature: Graduation Project

    Scenario Outline: Student see edited graduation Project topic
        Given I am logged in with password to the platform as <StudentUser>
        When Go to 'Graduation Project' module by Link
        And Select "Темы проектов" tab on Graduation project page
        Then I should see assigned student "<Student>" to edited topic "<ProjectName>" on Course project page
        Then I should see edited course project topic "<ProjectName>" on Course project page

        Examples:
            | ProjectName | Student                  | StudentUser          |
            | NormalValue | Autotest Test Student    | testStudentAutotest  |
            | ShortValue  | Autotest1 Test1 Student1 | testStudentAutotest1 |
            | LongValue   | Autotest2 Test2 Student2 | testStudentAutotest2 |