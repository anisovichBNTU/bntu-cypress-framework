import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import dialogForm from '../../../forms/dialogForm';
import interactiveBookPage from '../../../pages/subjectPage/interactiveBookPage';

const book = require('../../../testData/interactiveBook.json');

When(/^Click add interactive book on Interactive book page$/, () => {
    interactiveBookPage.clickAddNewBook();
});

When(/^Create new book "(.*)" on Interactive book page$/, function (topicNameType: string) {
    let name = book.bookTopicName[topicNameType];
    interactiveBookPage.createNewBook(name);
});

When(/^Select "(.*)" option on "(.*)" book context menu on Interactive book page$/, function (option: string, topicNameType: string) {
    let name = book.bookTopicName[topicNameType];
    name = name.replace(/\s+/g, ' ').trim();
    interactiveBookPage.selectTopicOption(name, option);
    switch (option) {
        case 'Удалить':
            dialogForm.clickAcceptButton();
            break;
        default:
        // throw new Error("error");    
    }
});

When(/^Create new book child topic "(.*)" on Interactive book page$/, function (chidTopicNameType: string) {
    let name = book.bookTopicName[chidTopicNameType];
    interactiveBookPage.createChildTopic(name);
});

When(/^Edit book topic using name "(.*)" on Interactive book page$/, function (topicNameType: string) {
    let name = book.bookTopicName[topicNameType];
    interactiveBookPage.fillNewBookTitle(name);
    interactiveBookPage.clickSaveNewBookTitle();
});

When(/^Open child topics on book "(.*)" on Interactive book page$/, function (chidTopicNameType: string) {
    let name = book.bookTopicName[chidTopicNameType];
    name = name.replace(/\s+/g, ' ').trim();
    interactiveBookPage.openChildBookTopics(name);
});

When(/^Open parent book topic "(.*)" on Interactive book page$/, function (topicNameType: string) {
    let name = book.bookTopicName[topicNameType];
    name = name.replace(/\s+/g, ' ').trim();
    interactiveBookPage.openInteractiveBookParent(name);
});

When(/^Open book topic "(.*)" on Interactive book page$/, function (topicNameType: string) {
    let name = book.bookTopicName[topicNameType];
    name = name.replace(/\s+/g, ' ').trim();
    interactiveBookPage.openInteractiveBook(name);
});

When(/^Open book topic "(.*)" to fill content on Interactive book page$/, function (topicNameType: string) {
    let name = book.bookTopicName[topicNameType];
    name = name.replace(/\s+/g, ' ').trim();
    interactiveBookPage.openInteractiveBookToFill(name);
});

When(/^Fill content "(.*)" to book on Interactive book page$/, function (bookContentType: string) {
    let content = book.bookContent[bookContentType];
    interactiveBookPage.fillBookContent(content);
});

When(/^Save book content on Interactive book page$/, function () {
    interactiveBookPage.saveBookContent();
});

Then(/^I should see created book topic "(.*)" on Interactive book page$/, (topicNameType: string) => {
    let name = book.bookTopicName[topicNameType];
    name = name.replace(/\s+/g, ' ').trim();
    interactiveBookPage.assertThatTopicIsDisplayed(name);
});

Then(/^I should see displayed book topic "(.*)" Hide icon on Interactive book page$/, (topicNameType: string) => {
    let name = book.bookTopicName[topicNameType];
    name = name.replace(/\s+/g, ' ').trim();
    interactiveBookPage.assertThatTopicHideIconIsDisplayed(name);
});

Then(/^I should see deleted book topic "(.*)" on Interactive book page$/, (topicNameType: string) => {
    let name = book.bookTopicName[topicNameType];
    name = name.replace(/\s+/g, ' ').trim();
    interactiveBookPage.assertThatTopicIsDisplayed(name, false);
});

Then(/^I should see hide book topic "(.*)" on Interactive book page$/, (topicNameType: string) => {
    let name = book.bookTopicName[topicNameType];
    name = name.replace(/\s+/g, ' ').trim();
    interactiveBookPage.assertThatTopicIsDisplayed(name, false);
});

Then(/^I should not see book topic "(.*)" Hide icon on Interactive book page$/, (topicNameType: string) => {
    let name = book.bookTopicName[topicNameType];
    name = name.replace(/\s+/g, ' ').trim();
    interactiveBookPage.assertThatTopicHideIconIsDisplayed(name, false);
});

Then(/^I should see book topic "(.*)" in book content on Interactive book page$/, (topicNameType: string) => {
    let topics = topicNameType.split(', ');
    topics = topics.map((topicType) => {
        return book.bookTopicName[topicType]
        // .replace(/\s+/g, ' ').trim();
    });
    interactiveBookPage.assertThatBookContentHasText(topics);
});

Then(/^I should see correct book content "(.*)" on Interactive book page$/, (bookContentType: string) => {
    let content = book.bookContent[bookContentType];
    interactiveBookPage.assertThatBookContentHasText([content]);
});

Then(/^Student should see book topic "(.*)" in book content on Interactive book page$/, (topicNameType: string) => {
    let topics = topicNameType.split(', ');
    topics = topics.map((topicType) => {
        return book.bookTopicName[topicType]
        // .replace(/\s+/g, ' ').trim();
    });
    interactiveBookPage.assertThatNotEditableBookContentHasText(topics);
});

Then(/^Student should not see book topic "(.*)" in book content on Interactive book page$/, (topicNameType: string) => {
    let topics = topicNameType.split(', ');
    topics = topics.map((topicType) => {
        return book.bookTopicName[topicType]
        // .replace(/\s+/g, ' ').trim();
    });
    interactiveBookPage.assertThatNotEditableBookContentHasText(topics, false);
});

Then(/^Student should see correct book content "(.*)" on Interactive book page$/, (bookContentType: string) => {
    let content = book.bookContent[bookContentType];
    interactiveBookPage.assertThatNotEditableBookContentHasText([content]);
});