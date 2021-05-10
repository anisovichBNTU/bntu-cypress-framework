import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import interactiveBookPage from '../../../pages/subjectPage/interactiveBookPage';


When(/^Click add interactive book on Interactive book page$/, () => {
    interactiveBookPage.clickAddNewBook();
});

When(/^Create new book on Interactive book page$/, function () {
    const titleExample = 'test auto text';
    interactiveBookPage.createNewBook(titleExample);
});

When(/^Open book on Interactive book page$/, function () {
    interactiveBookPage.openInteractiveBook('test auto text');
});

When(/^Open book to fill content on Interactive book page$/, function () {
    interactiveBookPage.openInteractiveBookToFill('test auto text');
});

When(/^Fill content to book on Interactive book page$/, function () {
    interactiveBookPage.fillBookContent('qwertyuiop');
});

When(/^Save book content on Interactive book page$/, function () {
    interactiveBookPage.saveBookContent();
});

Then(/^I should see created book topic on Interactive book page$/, () => {
    const titleExample = 'test auto text';
    interactiveBookPage.assertThatTopicIsDisplayed(titleExample);
});

Then(/^I should see correct book content on Interactive book page$/, () => {
    const titleExample = 'test auto text';
    interactiveBookPage.assertThatBookContentHasText([titleExample]);
});

Then(/^I should see correct book content with text on Interactive book page$/, () => {
    const titleExample = 'test auto text';
    interactiveBookPage.assertThatBookContentHasText([titleExample, 'qwertyuiop']);
});