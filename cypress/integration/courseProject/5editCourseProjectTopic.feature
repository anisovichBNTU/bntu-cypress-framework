
Feature: Course Project

    Scenario Outline: Edit course project topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Subject for Autotests" subject on Subject page
        And Click "Курсовое проектирование" subject module on Subject page
        And Select "Темы проектов" tab on Course project page
        And Edit course project topic "<ProjectName>" on Course project page
        Then I should see edited course project topic "<ProjectName>" on Course project page

        Examples:
            | ProjectName |
            | NormalValue |
            | ShortValue  |
            | LongValue   |