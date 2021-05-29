
Feature: EEM Complex

    Scenario Outline: Edit EEM Complex
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Subject for Autotests" subject on Subject page
        And Click "ЭУМК" subject module on Subject page
        And Select "Редактировать" option on "<ComplexName>" complex on EEM Complex page
        And Edit complex using name "<ComplexNameEdited>" on EEM Complex page
        Then I should see created complex "<ComplexNameEdited>" on EEM Complex page

        Examples:
            | ComplexName  | ComplexNameEdited  |
            | NormalValue  | NormalValueEdited  |
            | ShortValue   | ShortValueEdited   |
            | LongValue    | LongValueEdited    |
            | RussianValue | RussianValueEdited |