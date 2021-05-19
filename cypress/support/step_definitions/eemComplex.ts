import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import dialogForm from '../../../forms/dialogForm';
import complexPage from '../../../pages/subjectPage/complexPage';

const complex = require('../../../testData/complex.json');

When(/^Click add new complex on EEM Complex page$/, () => {
    complexPage.clickAddNewComplex();
});

When(/^Create new complex "(.*)" on EEM Complex page$/, function (complexNameType: string) {
    let name = complex.complexName[complexNameType];
    complexPage.createNewComplex(name);
});

When(/^Select "(.*)" option on "(.*)" complex on EEM Complex page$/, function (option: string, complexNameType: string) {
    let name = complex.complexName[complexNameType];
    name = name.replace(/\s+/g, ' ').trim();
    complexPage.selectComplexAction(name, option);
});

When(/^Edit complex using name "(.*)" on EEM Complex page$/, function (complexNameType: string) {
    let name = complex.complexName[complexNameType];
    complexPage.fillNewComplexName(name);
    complexPage.clickSaveNeComplex();
});

// When(/^Open child topics on book "(.*)" on EEM Complex page$/, function (chidcomplexNameType: string) {
//     let name = book.bookTopicName[chidcomplexNameType];
//     name = name.replace(/\s+/g, ' ').trim();
//     interactiveBookPage.openChildBookTopics(name);
// });

// When(/^Open parent book topic "(.*)" on EEM Complex page$/, function (complexNameType: string) {
//     let name = book.bookTopicName[complexNameType];
//     name = name.replace(/\s+/g, ' ').trim();
//     interactiveBookPage.openInteractiveBookParent(name);
// });

// When(/^Open book topic "(.*)" on EEM Complex page$/, function (complexNameType: string) {
//     let name = book.bookTopicName[complexNameType];
//     name = name.replace(/\s+/g, ' ').trim();
//     interactiveBookPage.openInteractiveBook(name);
// });

// When(/^Open book topic "(.*)" to fill content on EEM Complex page$/, function (complexNameType: string) {
//     let name = book.bookTopicName[complexNameType];
//     name = name.replace(/\s+/g, ' ').trim();
//     interactiveBookPage.openInteractiveBookToFill(name);
// });

// When(/^Fill content to book on EEM Complex page$/, function () {
//     interactiveBookPage.fillBookContent('qwertyuiop');
// });

// When(/^Save book content on EEM Complex page$/, function () {
//     interactiveBookPage.saveBookContent();
// });

Then(/^I should see created complex "(.*)" on EEM Complex page$/, (complexNameType: string) => {
    let name = complex.complexName[complexNameType];
    name = name.replace(/\s+/g, ' ').trim();
    complexPage.assertThatComplexIsDisplayed(name);
});

Then(/^I should see deleted complex "(.*)" on EEM Complex page$/, (complexNameType: string) => {
    let name = complex.complexName[complexNameType];
    name = name.replace(/\s+/g, ' ').trim();
    complexPage.assertThatComplexIsDisplayed(name, false);
});

// Then(/^I should see hide book topic "(.*)" on EEM Complex page$/, (complexNameType: string) => {
//     let name = book.bookTopicName[complexNameType];
//     name = name.replace(/\s+/g, ' ').trim();
//     interactiveBookPage.assertThatTopicIsDisplayed(name, false);
// });

// Then(/^I should not see book topic "(.*)" Hide icon on EEM Complex page$/, (complexNameType: string) => {
//     let name = book.bookTopicName[complexNameType];
//     name = name.replace(/\s+/g, ' ').trim();
//     interactiveBookPage.assertThatTopicHideIconIsDisplayed(name, false);
// });

// Then(/^I should see book topic "(.*)" in book content on EEM Complex page$/, (complexNameType: string) => {
//     let topics = complexNameType.split(', ');
//     topics = topics.map((topicType) => {
//         return book.bookTopicName[topicType]
//         // .replace(/\s+/g, ' ').trim();
//     });
//     interactiveBookPage.assertThatBookContentHasText(topics);
// });

// Then(/^I should see correct book content on EEM Complex page$/, () => {
//     interactiveBookPage.assertThatBookContentHasText(['qwertyuiop']);
// });

// Then(/^Student should see book topic "(.*)" in book content on EEM Complex page$/, (complexNameType: string) => {
//     let topics = complexNameType.split(', ');
//     topics = topics.map((topicType) => {
//         return book.bookTopicName[topicType]
//         // .replace(/\s+/g, ' ').trim();
//     });
//     interactiveBookPage.assertThatNotEditableBookContentHasText(topics);
// });

// Then(/^Student should not see book topic "(.*)" in book content on EEM Complex page$/, (complexNameType: string) => {
//     let topics = complexNameType.split(', ');
//     topics = topics.map((topicType) => {
//         return book.bookTopicName[topicType]
//         // .replace(/\s+/g, ' ').trim();
//     });
//     interactiveBookPage.assertThatNotEditableBookContentHasText(topics, false);
// });

// Then(/^Student should see correct book content on EEM Complex page$/, () => {
//     interactiveBookPage.assertThatNotEditableBookContentHasText(['qwertyuiop']);
// });