import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { ComplexSection } from '../../../constants/complex';
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

When(/^Open complex "(.*)" on EEM Complex page$/, function (complexNameType: string) {
    let name = complex.complexName[complexNameType];
    complexPage.openComplex(name);
});

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

Then(/^I should see displayed all EEM Complex section on the map on EEM Complex page$/, () => {
    complexPage.assertThatComplexMapSectionIsDisplayed(ComplexSection.TITLE);
    complexPage.assertThatComplexMapSectionIsDisplayed(ComplexSection.COURSE_PROGRAM);
    complexPage.assertThatComplexMapSectionIsDisplayed(ComplexSection.THEORETICAL);
    complexPage.assertThatComplexMapSectionIsDisplayed(ComplexSection.PRACTICAL);
});

Then(/^I should see displayed all EEM Complex section on the complex form on EEM Complex page$/, () => {
    complexPage.assertThatComplexSectionIsDisplayed(ComplexSection.TITLE);
    complexPage.assertThatComplexSectionIsDisplayed(ComplexSection.COURSE_PROGRAM);
    complexPage.assertThatComplexSectionIsDisplayed(ComplexSection.THEORETICAL);
    complexPage.assertThatComplexSectionIsDisplayed(ComplexSection.PRACTICAL);
});
