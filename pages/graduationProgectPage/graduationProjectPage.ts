import { Button } from '../../elements';
import BasePage from '../basePage';
import graduationProjectTopicForm from './graduationProjectTopicForm';

class GraduationProjectPage extends BasePage {

    graduationProjectTab: (tabName: string) => Button;
    graduationProjectTopicForm: typeof graduationProjectTopicForm

    constructor() {
        super(/web\/diplom/);

        this.graduationProjectTopicForm = graduationProjectTopicForm;

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