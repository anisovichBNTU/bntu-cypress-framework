import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import subjectPage from '../../../pages/subjectPage/subjectPage';


When(/^Select "(.*)" subject on Subject page$/, (subject: string) => {
    subjectPage.selectSubjectByName(subject);
});

When(/^Click "(.*)" subject module on Subject page$/, (module: string) => {
    subjectPage.clickSubjectModule(module);
});