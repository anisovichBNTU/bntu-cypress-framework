import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import dialogForm from '../../../forms/dialogForm';
import interactiveBookPage from '../../../pages/subjectPage/interactiveBookPage';


When(/^Click add interactive book on Interactive book page$/, () => {
    interactiveBookPage.clickAddNewBook();
});

When(/^Create new book "(.*)" on Interactive book page$/, function (topicName: string) {
    interactiveBookPage.createNewBook(topicName);
});

When(/^Select "(.*)" option on "(.*)" book context menu on Interactive book page$/, function (option: string, topicName: string) {
    interactiveBookPage.selectTopicOption(topicName, option);
    switch (option) {
        case 'Удалить':
            dialogForm.clickAcceptButton();
            break;
        default:
            // throw new Error("error");    
    }
});

When(/^Create new book child topic "(.*)" on Interactive book page$/, function (childTopicName: string) {
    interactiveBookPage.createChildTopic(childTopicName);
});

When(/^Edit book topic using name "(.*)" on Interactive book page$/, function (editedTopicName: string) {
    interactiveBookPage.fillNewBookTitle(editedTopicName);
    interactiveBookPage.clickSaveNewBookTitle();
});

When(/^Open child topics on book "(.*)" on Interactive book page$/, function (topicName: string) {
    interactiveBookPage.openChildBookTopics(topicName);
});

When(/^Open parent book topic "(.*)" on Interactive book page$/, function (topicName: string) {
    interactiveBookPage.openInteractiveBookParent(topicName);
});

When(/^Open book topic "(.*)" on Interactive book page$/, function (topicName: string) {
    interactiveBookPage.openInteractiveBook(topicName);
});

When(/^Open book topic "(.*)" to fill content on Interactive book page$/, function (topicName: string) {
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

Then(/^I should see deleted book topic "(.*)" on Interactive book page$/, (topicName: string) => {
    interactiveBookPage.assertThatTopicIsDisplayed(topicName, false);
});

Then(/^I should see book topic "(.*)" in book content on Interactive book page$/, (topicName: string) => {
    const topics = topicName.split(', ');
    interactiveBookPage.assertThatBookContentHasText(topics);
});

Then(/^I should see correct book content on Interactive book page$/, () => {
    interactiveBookPage.assertThatBookContentHasText(['qwertyuiop']);
});