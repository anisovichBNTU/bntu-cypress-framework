
Feature: Interactive Book

    Scenario Outline: Create new interactive book topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Click add interactive book on Interactive book page
        And Create new book "<BookTopicName>" on Interactive book page
        Then I should see created book topic "<BookTopicName>" on Interactive book page
        When Open book topic "<BookTopicName>" on Interactive book page
        Then I should see book topic "<BookTopicName>" in book content on Interactive book page

        Examples:
            | BookTopicName |
            | NormalValue   |
            | ShortValue    |
            | LongValue     |
