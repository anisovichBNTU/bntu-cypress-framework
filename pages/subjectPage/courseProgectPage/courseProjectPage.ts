import { Button, Label } from '../../../elements';
import BasePage from '../../basePage';
import courseProjectTopicForm from './courseProjectTopicForm';

class CourseProjectPage extends BasePage {

    courseProjectTab: (tabName: string) => Button;
    courseProjectTopicForm: typeof courseProjectTopicForm

    constructor() {
        super(/web\/viewer\/subject.*course/);

        this.courseProjectTopicForm = courseProjectTopicForm;

        this.courseProjectTab = (tabName: string) => new Button('.mdc-tab-bar button',
            `Course project: tab (${tabName})`,
            {
                text: tabName,
                intoIFrame: true
            });
    }

    selectCourseProjectTab(tabName: string) {
        this.courseProjectTab(tabName).click();
    }

}

export default new CourseProjectPage();