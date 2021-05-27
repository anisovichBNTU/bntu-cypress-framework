
Feature: Graduation Project

    Scenario Outline: Edit graduation project topic
        Given I am logged in with password to the platform as test user
        When Select 'Graduation Project' module on header on Main page
        And Select "Темы проектов" tab on Graduation project page
        And Edit graduation project topic "<ProjectName>" on Graduation project page
        Then I should see edited graduation project topic "<ProjectName>" on Graduation project page

        Examples:
            | ProjectName |
            | NormalValue |
            | ShortValue  |
            | LongValue   |