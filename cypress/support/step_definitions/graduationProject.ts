import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import graduationProjectPage from '../../../pages/graduationProgectPage/graduationProjectPage';

When(/^Select "(.*)" tab on Graduation project page$/, (tabName: string) => {
    graduationProjectPage.selectGraduationProjectTab(tabName);
});

When(/^Add new graduation project topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.addNewTopic();
});

When(/^Edit graduation project topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.clickEditTopic('autotest name');
    graduationProjectPage.graduationProjectTopicForm.fillTopicInfo({ name: 'autotest name edited' });
});

When(/^Delete topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.deleteTopic('autotest name');
    graduationProjectPage.dialogForm.clickAcceptButton();
});

When(/^Cancel assignment student to topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.cancelAssignmentToTopic('autotest name');
    graduationProjectPage.dialogForm.clickAcceptButton();
});

When(/^Select topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.selectTopic('autotest name');
    graduationProjectPage.dialogForm.clickAcceptButton();
    cy.wait(500);
    cy.reload();
});

When(/^Confirm student on topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.confirmTopic('autotest name');
});

When(/^Fill new graduation project "(.*)" topic info on Graduation project page$/, (projectName: string) => {
    graduationProjectPage.graduationProjectTopicForm.fillTopicInfo({ name: projectName });
});

When(/^Assign student "(.*)" from "(.*)" group to topic "(.*)" on Graduation project page$/,
    (studentName: string, group: string, projectName: string) => {
        graduationProjectPage.graduationProjectTopicForm.assignStudentToTopic(projectName, {
            group, name: studentName
        });
    });

When(/^Assign student from "(.*)" group to topic "(.*)" on Graduation project page$/, (group: string, projectName: string) => {
    graduationProjectPage.graduationProjectTopicForm.assignStudentToTopic(projectName, { group, random: true });
});

Then(/^I should see created graduation project topic "(.*)" on Graduation project page$/, (projectName: string) => {
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicIsDisplayed(projectName);
});

Then(/^I should see edited graduation project topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicIsDisplayed('autotest name edited');
});

Then(/^I should see deleted graduation project topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicIsDisplayed('autotest name', false);
});

Then(/^I should see assigned student "(.*)" to topic "(.*)" on Graduation project page$/, (studentName: string, projectName: string) => {
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicHasStudent(projectName, studentName);
});

Then(/^I should see unassigned student "(.*)" to topic on Graduation project page$/, (studentName: string) => {
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicHasStudent('autotest name', studentName, true);
});