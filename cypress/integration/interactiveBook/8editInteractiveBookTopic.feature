
Feature: Interactive Book

    Scenario Outline: Edit interactive book topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Select "Переименовать" option on "<BookTopicName>" book context menu on Interactive book page
        And Edit book topic using name "<BookTopicNameEdited>" on Interactive book page
        Then I should see created book topic "<BookTopicNameEdited>" on Interactive book page
        When Open book topic "<BookTopicNameEdited>" on Interactive book page
        Then I should see book topic "<BookTopicNameEdited>" in book content on Interactive book page
        Then I should see correct book content "<BookContent>" on Interactive book page

        Examples:
            | BookTopicName | BookTopicNameEdited | BookContent |
            | NormalValue   | NormalValueEdited   | NormalValue |
            | ShortValue    | ShortValueEdited    | ShortValue  |
            | LongValue     | LongValueEdited     | LongValue   |