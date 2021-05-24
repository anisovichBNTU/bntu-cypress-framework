
Feature: EEM Complex

    Scenario Outline: Open created EEM Complex
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "ЭУМК" subject module on Subject page
        And Open complex "<ComplexName>" on EEM Complex page
        Then I should see displayed all EEM Complex section on the complex form on EEM Complex page

        Examples:
            | ComplexName  |
            | NormalValue  |
            | ShortValue   |
            | LongValue    |
            | RussianValue |