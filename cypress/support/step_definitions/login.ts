import loginPage from "../../../pages/loginPage";

const {
    Given, Before, When, Then
} = require("cypress-cucumber-preprocessor/steps");

const url = 'https://educats.by/';

Given(`I open EduCats page`, () => {
    cy.visit(url);
    loginPage.validateUrl();
});

When(`I logged in as test user`, () => {
    loginPage.loginWithPassword('testLecturer', 'testLecturer')
});