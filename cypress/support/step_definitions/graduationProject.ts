import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import graduationProjectPage from '../../../pages/graduationProgectPage/graduationProjectPage';

When(/^Select "(.*)" tab on Graduation project page$/, (tabName: string) => {
    graduationProjectPage.selectGraduationProjectTab(tabName);
});

When(/^Add new graduation project topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.addNewTopic();
});

When(/^Delete topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.deleteTopic('autotest name');
    graduationProjectPage.dialogForm.clickAcceptButton();
});

When(/^Fill new graduation project topic info on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.fillTopicInfo({ name: 'autotest name' });
});

When(/^Assign student "(.*)" from "(.*)" group to topic on Graduation project page$/, (studentName: string, group: string) => {
    graduationProjectPage.graduationProjectTopicForm.assignStudentToTopic('autotest name', {
        group, name: studentName
    });
});

When(/^Assign student from "(.*)" group to topic on Graduation project page$/, (group: string) => {
    graduationProjectPage.graduationProjectTopicForm.assignStudentToTopic('autotest name', { group, random: true });
});

Then(/^I should see created graduation project topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicIsDisplayed('autotest name');
});

Then(/^I should see deleted graduation project topic on Graduation project page$/, () => {
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicIsDisplayed('autotest name', false);
});

Then(/^I should assigned student "(.*)" to topic on Graduation project page$/, (studentName: string) => {
    graduationProjectPage.graduationProjectTopicForm.assertThatTopicHasStudent('autotest name', studentName);
});