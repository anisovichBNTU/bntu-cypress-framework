import { Button, Label } from '../../elements';
import projectTopicForm from '../../forms/projectTopicForm';
import BasePage from '../basePage';

class CourseProjectPage extends BasePage {

    private courseProjectTab: (tabName: string) => Button;
    courseProjectTopicForm: typeof projectTopicForm;

    constructor() {
        super(/web\/viewer\/subject.*course/);

        this.courseProjectTopicForm = projectTopicForm;

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