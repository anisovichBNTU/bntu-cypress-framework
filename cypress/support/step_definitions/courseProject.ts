import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import courseProjectPage from '../../../pages/subjectPage/courseProjectPage';

const project = require('../../../testData/graduationProject.json');

When(/^Select "(.*)" tab on Course project page$/, (tabName: string) => {
    courseProjectPage.selectCourseProjectTab(tabName);
});

When(/^Add new course project topic on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.addNewTopic();
});

When(/^Edit course project topic "(.*)" on Course project page$/, (projectNameType: string) => {
    let name = project.projectName[projectNameType];
    const nameEdited = project.projectNameEdited[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.clickEditTopic(name);
    courseProjectPage.courseProjectTopicForm.fillTopicInfo({ name: nameEdited });
});

When(/^Delete topic "(.*)" on Course project page$/, (projectNameType: string) => {
    let name = project.projectNameEdited[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.deleteTopic(name);
    courseProjectPage.dialogForm.clickAcceptButton();
});

When(/^Cancel assignment student to topic "(.*)" on Course project page$/, (projectNameType: string) => {
    let name = project.projectName[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.cancelAssignmentToTopic(name);
    courseProjectPage.dialogForm.clickAcceptButton();
});
When(/^Cancel assignment student to edited topic "(.*)" on Course project page$/, (projectNameType: string) => {
    let name = project.projectNameEdited[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.cancelAssignmentToTopic(name);
    courseProjectPage.dialogForm.clickAcceptButton();
});

When(/^Select topic "(.*)" on Course project page$/, (projectNameType: string) => {
    let name = project.projectName[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.selectTopic(name);
    courseProjectPage.dialogForm.clickAcceptButton();
    cy.wait(500);
    cy.reload();
});

When(/^Confirm student on topic "(.*)" on Course project page$/, (projectNameType: string) => {
    let name = project.projectName[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.confirmTopic(name);
});

When(/^Fill new course project "(.*)" topic info on Course project page$/, (projectNameType: string) => {
    const name = project.projectName[projectNameType];
    courseProjectPage.courseProjectTopicForm.fillTopicInfo({ name });
});

When(/^Assign student "(.*)" to topic "(.*)" on Course project page$/, (studentName: string, projectNameType: string) => {
    let name = project.projectName[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.assignStudentToTopic(name, { name: studentName, search: false });
});

Then(/^I should see created course project topic "(.*)" on Course project page$/, (projectNameType: string) => {
    let name = project.projectName[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.assertThatTopicIsDisplayed(name);
});

Then(/^I should see edited course project topic "(.*)" on Course project page$/, (projectNameType: string) => {
    let name = project.projectNameEdited[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.assertThatTopicIsDisplayed(name);
});

Then(/^I should see deleted course project topic "(.*)" on Course project page$/, (projectNameType: string) => {
    let name = project.projectNameEdited[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.assertThatTopicIsDisplayed(name, false);
});

Then(/^I should see assigned student "(.*)" to topic "(.*)" on Course project page$/, (studentName: string, projectNameType: string) => {
    let name = project.projectName[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.assertThatTopicHasStudent(name, studentName);
});

Then(/^I should see assigned student "(.*)" to edited topic "(.*)" on Course project page$/, (studentName: string, projectNameType: string) => {
    let name = project.projectNameEdited[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.assertThatTopicHasStudent(name, studentName);
});

Then(/^I should see unassigned student "(.*)" to topic "(.*)" on Course project page$/, (studentName: string, projectNameType: string) => {
    let name = project.projectName[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.assertThatTopicHasStudent(name, studentName, true);
});

Then(/^I should see unassigned student "(.*)" to edited topic "(.*)" on Course project page$/, (studentName: string, projectNameType: string) => {
    let name = project.projectNameEdited[projectNameType];
    name = name.replace(/\s+/g, ' ').trim();
    courseProjectPage.courseProjectTopicForm.assertThatTopicHasStudent(name, studentName, true);
});