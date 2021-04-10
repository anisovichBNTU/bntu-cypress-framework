@epic("cucumber")
@story("myStory")
Feature: The Google


    @subSuite("firsttest0")
    @epic("firsttest2")
    @story("firsttest4")
    @severity("critical")
    @owner("firsttest8")
    @someOtherTags
    @issue("jira","https://google.com")
    Scenario: Opening a EduCats main page
        Given I open EduCats page
        When I logged in as test user
