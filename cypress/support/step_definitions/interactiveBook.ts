import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import interactiveBookPage from '../../../pages/subjectPage/interactiveBookPage';


When(/^Click add interactive book on Interactive book page$/, () => {
    interactiveBookPage.clickAddNewBook();
});

When(/^Create new book on Interactive book page$/, function (){
    const titleExample = 'test auto text';
    interactiveBookPage.createNewBook(titleExample);
});

Then(/^I should see created book topic on Interactive book page$/, () => {
    const titleExample = 'test auto text';
    interactiveBookPage.assertThatTopicIsDisplayed(titleExample);
});