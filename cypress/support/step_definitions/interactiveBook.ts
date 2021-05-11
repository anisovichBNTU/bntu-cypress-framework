import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import interactiveBookPage from '../../../pages/subjectPage/interactiveBookPage';


When(/^Click add interactive book on Interactive book page$/, () => {
    interactiveBookPage.clickAddNewBook();
});

When(/^Create new book "(.*)" on Interactive book page$/, function (topicName: string) {
    interactiveBookPage.createNewBook(topicName);
});

When(/^Select "(.*)" option on "(.*)" book context menu on Interactive book page$/, function (option: string, topicName: string) {
    interactiveBookPage.selectTopicOption(topicName, option);
});

When(/^Create new book child topic "(.*)" on Interactive book page$/, function (childTopicName: string) {
    const childTitleExample = 'test auto child topic';
    interactiveBookPage.createChildTopic(childTopicName);
});

When(/^Open book "(.*)" on Interactive book page$/, function (topicName: string) {
    interactiveBookPage.openInteractiveBook(topicName);
});

When(/^Open book "(.*)" to fill content on Interactive book page$/, function (topicName: string) {
    interactiveBookPage.openInteractiveBookToFill(topicName);
});

When(/^Fill content to book on Interactive book page$/, function () {
    interactiveBookPage.fillBookContent('qwertyuiop');
});

When(/^Save book content on Interactive book page$/, function () {
    interactiveBookPage.saveBookContent();
});

Then(/^I should see created book topic "(.*)" on Interactive book page$/, (topicName: string) => {
    interactiveBookPage.assertThatTopicIsDisplayed(topicName);
});

Then(/^I should see book topic "(.*)" in book content on Interactive book page$/, (topicName: string) => {
    interactiveBookPage.assertThatBookContentHasText([topicName]);
});

Then(/^I should see correct book content on Interactive book page$/, () => {
    interactiveBookPage.assertThatBookContentHasText(['qwertyuiop']);
});