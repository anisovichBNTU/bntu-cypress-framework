import { Before, After } from 'cypress-cucumber-preprocessor/steps';

const defaultSize = { width: 1900, height: 1000 };

Before(() => {
    const { width, height } = defaultSize;
    // await browser.setWindowSize(width, height);
});


After(() => {
    cy.screenshot({capture: 'viewport'});
});