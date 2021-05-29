
Feature: Course Project

    Scenario Outline: Create new course project topic
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Subject for Autotests" subject on Subject page
        And Click "Курсовые проекты/работы" subject module on Subject page
        And Select "Темы проектов" tab on Course project page
        And Add new course project topic on Course project page
        And Fill new course project "<ProjectName>" topic info on Course project page
        Then I should see created course project topic "<ProjectName>" on Course project page

        Examples:
            | ProjectName |
            | NormalValue |
            | ShortValue  |
            | LongValue   |
