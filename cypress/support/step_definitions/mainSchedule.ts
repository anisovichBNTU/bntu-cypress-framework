import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import mainSchedulePage from '../../../pages/mainSchedulePage';
import subjectPage from '../../../pages/subjectPage/subjectPage';


When(/^Select 'Subject' module on header on Main page$/, () => {
    mainSchedulePage.headerForm.clickSubjectButton();
    subjectPage.validateUrl();
});