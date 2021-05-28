
Feature: EEM Complex

    Scenario Outline: Add file to EEM Complex section
        Given I am logged in with password to the platform as test user
        When Select 'Subject' module on header on Main page
        And Select "Test Subject Autotest" subject on Subject page
        And Click "ЭУМК" subject module on Subject page
        And Open complex "<ComplexName>" on EEM Complex page
        And Click Add new element on EEM Complex page
        And Add file "<FileType>" named "<FileName>" to section "<Section>" on EEM Complex page
        Then I should see displayed all EEM Complex section on the complex form on EEM Complex page
        Then I should see displayed added file "<FileName>" on the complex form on EEM Complex page

        Examples:
            | ComplexName  | FileName     | FileType | Section     |
            | NormalValue  | NormalValue  | DOC      | THEORETICAL |
            | ShortValue   | ShortValue   | PDF      | THEORETICAL |
            | LongValue    | LongValue    | JPG      | THEORETICAL |
            | RussianValue | RussianValue | PPT      | THEORETICAL |