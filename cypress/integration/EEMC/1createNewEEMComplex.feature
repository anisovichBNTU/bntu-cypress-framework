
Feature: EEM Complex

    Scenario Outline: Create new EEM Complex
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Subject for Autotests" subject on Subject page
        And Click "ЭУМК" subject module on Subject page
        And Click add new complex on EEM Complex page
        And Create new complex "<ComplexName>" on EEM Complex page
        Then I should see created complex "<ComplexName>" on EEM Complex page

        Examples:
            | ComplexName  |
            | NormalValue  |
            | ShortValue   |
            | LongValue    |
            | RussianValue |
