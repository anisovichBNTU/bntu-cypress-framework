import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import graduationProjectPage from '../../../pages/graduationProjectPage/graduationProjectPage';
import mainSchedulePage from '../../../pages/mainSchedulePage';
import subjectPage from '../../../pages/subjectPage/subjectPage';

When(/^Select 'Subject' module on header on Main page$/, () => {
    mainSchedulePage.headerForm.clickSubjectButton();
    subjectPage.validateUrl();
});

When(/^Select 'Graduation Project' module on header on Main page$/, () => {
    mainSchedulePage.headerForm.clickGraduationProjectButtonButton();
    graduationProjectPage.validateUrl();
});

When(/^Go to 'Graduation Project' module by Link$/, () => {
    cy.visit('https://educats.by/web/diplom')
    graduationProjectPage.validateUrl();
});