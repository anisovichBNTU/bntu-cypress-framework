
Feature: Interactive Book

    Scenario Outline: Add text to interactive book topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Subject for Autotests" subject on Subject page
        And Click "Интерактивный учебник" subject module on Subject page
        And Open book topic "<BookTopicName>" to fill content on Interactive book page
        And Fill content "<BookContent>" to book on Interactive book page
        And Save book content on Interactive book page
        Then I should see book topic "<BookTopicName>" in book content on Interactive book page
        Then I should see correct book content "<BookContent>" on Interactive book page

        Examples:
            | BookTopicName | BookContent |
            | NormalValue   | NormalValue |
            | ShortValue    | ShortValue  |
            | LongValue     | LongValue   |