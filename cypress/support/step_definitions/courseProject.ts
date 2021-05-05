import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import courseProjectPage from '../../../pages/subjectPage/courseProgectPage/courseProjectPage';


When(/^Select "(.*)" tab on Course project page$/, (tabName: string) => {
    courseProjectPage.selectCourseProjectTab(tabName);
});

When(/^Add new course project topic on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.addNewTopic();
});

When(/^Fill new course project topic info on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.fillTopicInfo({ name: 'autotest name'});
});

Then(/^I should see created course project topic on Course project page$/, () => {
    courseProjectPage.courseProjectTopicForm.assertThatTopicIsDisplayed('autotest name');
});