
Feature: Interactive Book

    Scenario Outline: Student see interactive book content
        Given I am logged in with password to the platform as <StudentUser>
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        When Open book topic "<BookTopicName>" on Interactive book page
        Then Student should see book topic "<BookTopicName>" in book content on Interactive book page
        Then Student should see correct book content "<BookContent>" on Interactive book page

        Examples:
            | BookTopicName | StudentUser          | BookContent |
            | NormalValue   | testStudentAutotest1 | NormalValue |
            | ShortValue    | testStudentAutotest2 | ShortValue  |
            | LongValue     | testStudentAutotest3 | LongValue   |