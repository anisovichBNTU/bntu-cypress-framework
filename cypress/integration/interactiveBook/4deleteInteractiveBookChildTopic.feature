
Feature: Interactive Book

    Scenario Outline: Delete interactive book child topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Open child topics on book "<BookTopicName>" on Interactive book page
        And Select "Удалить" option on "<ChildTopicName>" book context menu on Interactive book page
        Then I should see deleted book topic "<ChildTopicName>" on Interactive book page
        When Open book topic "<BookTopicName>" on Interactive book page
        Then I should see book topic "<BookTopicName>" in book content on Interactive book page
        Then Then I should see correct book content on Interactive book page

        Examples:
            | BookTopicName | ChildTopicName   |
            | NormalValue   | ChildNormalValue |
            | ShortValue    | ChildShortValue  |
            | LongValue     | ChildLongValue   |