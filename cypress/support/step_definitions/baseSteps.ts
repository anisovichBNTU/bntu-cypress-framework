const {
    Given, Before, When, Then
} = require("cypress-cucumber-preprocessor/steps");
import { Element } from '../../../elements/element';

const url = 'https://educats.by/';

let myBeforeCount = 0;

// This verifies that the hooks work with bundling feature
// https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/pull/234
Before(() => {
    expect(myBeforeCount).to.be.lessThan(6);
    myBeforeCount += 1;
});

Given(`I open EduCats page`, () => {
    cy.visit(url);
});

When(`I logged in as test user`, () => {
    const loginButton = new Element('.loginbtn', 'Log in button');
    loginButton.click();
    cy.wait(5000)
});