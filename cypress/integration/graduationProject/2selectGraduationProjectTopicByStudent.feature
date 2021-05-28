
Feature: Graduation Project

    Scenario Outline: Student select graduation project topic
        Given I am logged in with password to the platform as <StudentUser>
        When Go to 'Graduation Project' module by Link
        And Select "Темы проектов" tab on Graduation project page
        And Select topic "<ProjectName>" on Graduation project page
        Then I should see assigned student "<Student>" to topic "<ProjectName>" on Graduation project page

        Examples:
            | ProjectName | Student                  | StudentUser          |
            | NormalValue | Autotest1 Test1 Student1 | testStudentAutotest1 |
            | ShortValue  | Autotest2 Test2 Student2 | testStudentAutotest2 |
            | LongValue   | Autotest3 Test3 Student3 | testStudentAutotest3 |