
Feature: Interactive Book

    Scenario Outline: Add interactive book child topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Subject for Autotests" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Select "Добавить новую тему" option on "<BookTopicName>" book context menu on Interactive book page
        And Create new book child topic "<ChildTopicName>" on Interactive book page
        Then I should see created book topic "<ChildTopicName>" on Interactive book page
        When Open book topic "<ChildTopicName>" on Interactive book page
        Then I should see book topic "<ChildTopicName>" in book content on Interactive book page
        When Open parent book topic "<BookTopicName>" on Interactive book page
        Then I should see book topic "<BookTopicName>, <ChildTopicName>" in book content on Interactive book page

        Examples:
            | BookTopicName | ChildTopicName   |
            | NormalValue   | ChildNormalValue |
            | ShortValue    | ChildShortValue  |
            | LongValue     | ChildLongValue   |