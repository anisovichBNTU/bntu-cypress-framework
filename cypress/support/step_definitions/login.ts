import { Given, Before, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPage from "../../../pages/loginPage";
import mainSchedulePage from '../../../pages/mainSchedulePage';

const url = 'https://educats.by/';

Given(`I am logged in with password to the platform as test user`, () => {
    cy.visit(url);
    loginPage.validateUrl();
    loginPage.loginWithPassword('testLecturer', 'testLecturer');
    mainSchedulePage.waitUntilScheduleIsDisplayed();
});
