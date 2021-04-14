import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import mainSchedulePage from '../../../pages/mainSchedulePage';


When(/^Select Subject on header on Main page$/, () => {
    mainSchedulePage.headerForm.clickSubjectButton();
});