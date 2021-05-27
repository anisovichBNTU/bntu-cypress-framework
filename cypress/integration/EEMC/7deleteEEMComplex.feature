
Feature: EEM Complex

    Scenario Outline: Delete EEM Complex
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "ЭУМК" subject module on Subject page
        And Select "Удалить" option on "<ComplexName>" complex on EEM Complex page
        Then I should see deleted complex "<ComplexName>" on EEM Complex page

        Examples:
            | ComplexName        |
            | NormalValueEdited  |
            | ShortValueEdited   |
            | LongValueEdited    |
            | RussianValueEdited |