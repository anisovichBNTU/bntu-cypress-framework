import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import courseProjectPage from '../../../pages/subjectPage/courseProgectPage/courseProjectPage';

When(/^Select "(.*)" tab on Course project page$/, (tabName: string) => {
    courseProjectPage.selectCourseProjectTab(tabName);
});

When(/^Add new course project topic on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.addNewTopic();
});

When(/^Edit course project topic on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.clickEditTopic('autotest name');
    courseProjectPage.courseProjectTopicForm.fillTopicInfo({ name: 'autotest name edited' });
});

When(/^Delete topic on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.deleteTopic('autotest name');
    courseProjectPage.dialogForm.clickAcceptButton();
});

When(/^Cancel assignment student to topic on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.cancelAssignmentToTopic('autotest name');
    courseProjectPage.dialogForm.clickAcceptButton();
});

When(/^Fill new course project topic info on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.fillTopicInfo({ name: 'autotest name' });
});

When(/^Assign student "(.*)" from "(.*)" group to topic on Course project page$/, (studentName: string, group: string) => {
    courseProjectPage.courseProjectTopicForm.assignStudentToTopic('autotest name', {
        group, name: studentName
    });
});

When(/^Assign student from "(.*)" group to topic on Course project page$/, (group: string) => {
    courseProjectPage.courseProjectTopicForm.assignStudentToTopic('autotest name', { group, random: true });
});

When(/^Assign student "(.*)" to topic on Course project page$/, (studentName: string) => {
    courseProjectPage.courseProjectTopicForm.assignStudentToTopic('autotest name', { name: studentName, search: false });
});

Then(/^I should see created course project topic on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.assertThatTopicIsDisplayed('autotest name');
});

Then(/^I should see edited course project topic on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.assertThatTopicIsDisplayed('autotest name edited');
});

Then(/^I should see deleted course project topic on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.assertThatTopicIsDisplayed('autotest name', false);
});

Then(/^I should see assigned student "(.*)" to topic on Course project page$/, (studentName: string) => {
    courseProjectPage.courseProjectTopicForm.assertThatTopicHasStudent('autotest name', studentName);
});

Then(/^I should see assigned any student to topic on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.assertThatTopicHasStudent('autotest name', /autotest name.*\deditremove/);
});

Then(/^I should see unassigned student "(.*)" to topic on Course project page$/, (studentName: string) => {
    courseProjectPage.courseProjectTopicForm.assertThatTopicHasStudent('autotest name', studentName, true);
});