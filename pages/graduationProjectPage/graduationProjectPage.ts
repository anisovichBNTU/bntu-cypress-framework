import { Button } from '../../elements';
import BasePage from '../basePage';
import projectTopicForm from '../../forms/projectTopicForm';

class GraduationProjectPage extends BasePage {

    private graduationProjectTab: (tabName: string) => Button;
    graduationProjectTopicForm: typeof projectTopicForm

    constructor() {
        super(/web\/diplom/);

        this.graduationProjectTopicForm = projectTopicForm;

        this.graduationProjectTab = (tabName: string) => new Button('.mdc-tab-bar button',
            `Graduation project: tab (${tabName})`,
            {
                text: tabName,
                intoIFrame: true
            });
    }

    selectGraduationProjectTab(tabName: string) {
        this.graduationProjectTab(tabName).click();
    }

}

export default new GraduationProjectPage();