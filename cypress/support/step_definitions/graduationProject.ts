import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import graduationProjectPage from '../../../pages/graduationProgectPage/graduationProjectPage';

const project = require('../../../testData/graduationProject.json')

When(/^Select "(.*)" tab on Graduation project page$/, (tabName: string) => {
    graduationProjectPage.selectGraduationProjectTab(tabName);
});

When(/^Add new graduation project topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.addNewTopic();
});

When(/^Edit graduation project topic "(.*)" on Graduation project page$/, (projectNameType: string) => {
    const name = project[projectNameType].projectName;
    const nameEdited = project[projectNameType].projectNameEdited;
    graduationProjectPage.graduationProjectTopicForm.clickEditTopic(name);
    graduationProjectPage.graduationProjectTopicForm.fillTopicInfo({ name: nameEdited });
});

When(/^Delete topic "(.*)" on Graduation project page$/, (projectNameType: string) => {
    const name = project[projectNameType].projectNameEdited;
    graduationProjectPage.graduationProjectTopicForm.deleteTopic(name);
    graduationProjectPage.dialogForm.clickAcceptButton();
});

When(/^Cancel assignment student to topic "(.*)" on Graduation project page$/, (projectNameType: string) => {
    const name = project[projectNameType].projectName;
    graduationProjectPage.graduationProjectTopicForm.cancelAssignmentToTopic(name);
    graduationProjectPage.dialogForm.clickAcceptButton();
});
When(/^Cancel assignment student to edited topic "(.*)" on Graduation project page$/, (projectNameType: string) => {
    const name = project[projectNameType].projectNameEdited;
    graduationProjectPage.graduationProjectTopicForm.cancelAssignmentToTopic(name);
    graduationProjectPage.dialogForm.clickAcceptButton();
});

When(/^Select topic "(.*)" on Graduation project page$/, (projectNameType: string) => {
    const name = project[projectNameType].projectName;
    graduationProjectPage.graduationProjectTopicForm.selectTopic(name);
    graduationProjectPage.dialogForm.clickAcceptButton();
    cy.wait(500);
    cy.reload();
});

When(/^Confirm student on topic "(.*)" on Graduation project page$/, (projectNameType: string) => {
    const name = project[projectNameType].projectName;
    graduationProjectPage.graduationProjectTopicForm.confirmTopic(name);
});

When(/^Fill new graduation project "(.*)" topic info on Graduation project page$/, (projectNameType: string) => {
    const name = project[projectNameType].projectName;
    graduationProjectPage.graduationProjectTopicForm.fillTopicInfo({ name });
});

When(/^Assign student "(.*)" from "(.*)" group to topic "(.*)" on Graduation project page$/,
    (studentName: string, group: string, projectNameType: string) => {
        const name = project[projectNameType].projectName;
        graduationProjectPage.graduationProjectTopicForm.assignStudentToTopic(name, {
            group, name: studentName
        });
    });

When(/^Assign student from "(.*)" group to topic "(.*)" on Graduation project page$/, (group: string, projectNameType: string) => {
    const name = project[projectNameType].projectName;
    graduationProjectPage.graduationProjectTopicForm.assignStudentToTopic(name, { group, random: true });
});

Then(/^I should see created graduation project topic "(.*)" on Graduation project page$/, (projectNameType: string) => {
    const name = project[projectNameType].projectName;
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicIsDisplayed(name);
});

Then(/^I should see edited graduation project topic "(.*)" on Graduation project page$/, (projectNameType: string) => {
    const name = project[projectNameType].projectNameEdited;
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicIsDisplayed(name);
});

Then(/^I should see deleted graduation project topic "(.*)" on Graduation project page$/, (projectNameType: string) => {
    const name = project[projectNameType].projectNameEdited;
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicIsDisplayed(name, false);
});

Then(/^I should see assigned student "(.*)" to topic "(.*)" on Graduation project page$/, (studentName: string, projectNameType: string) => {
    const name = project[projectNameType].projectName;
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicHasStudent(name, studentName);
});

Then(/^I should see assigned student "(.*)" to edited topic "(.*)" on Graduation project page$/, (studentName: string, projectNameType: string) => {
    const name = project[projectNameType].projectNameEdited;
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicHasStudent(name, studentName);
});

Then(/^I should see unassigned student "(.*)" to topic "(.*)" on Graduation project page$/, (studentName: string, projectNameType: string) => {
    const name = project[projectNameType].projectName;
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicHasStudent(name, studentName, true);
});

Then(/^I should see unassigned student "(.*)" to edited topic "(.*)" on Graduation project page$/, (studentName: string, projectNameType: string) => {
    const name = project[projectNameType].projectNameEdited;
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicHasStudent(name, studentName, true);
});