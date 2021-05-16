
Feature: Interactive Book

    Scenario Outline: Student cannot see hide interactive book
        Given I am logged in with password to the platform as <StudentUser>
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        Then I should see hide book topic "<ChildTopicName>" on Interactive book page
        When Open book topic "<BookTopicName>" on Interactive book page
        Then Student should see book topic "<BookTopicName>" in book content on Interactive book page
        Then Student should not see book topic "<ChildTopicName>" in book content on Interactive book page
        Then Student should see correct book content on Interactive book page

        Examples:
            | BookTopicName | ChildTopicName   | StudentUser          |
            | NormalValue   | ChildNormalValue | testStudentAutotest  |
            | ShortValue    | ChildShortValue  | testStudentAutotest1 |
            | LongValue     | ChildLongValue   | testStudentAutotest2 |