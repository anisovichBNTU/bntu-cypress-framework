
Feature: Interactive Book

    Scenario Outline: Delete interactive book topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Select "Удалить" option on "<BookTopicName>" book context menu on Interactive book page
        Then I should see deleted book topic "<BookTopicName>" on Interactive book page

        Examples:
            | BookTopicName     |
            | NormalValueEdited |
            | ShortValueEdited  |
            | LongValueEdited   |