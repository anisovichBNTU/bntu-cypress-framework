import { Button, Label, Select } from '../../elements';
import BasePage from '../basePage';

class SubjectPage extends BasePage {

    subjectSelect: Select;
    subjectModuleButton: (moduleName: string) => Button;
    baseModuleLabel: Label;

    constructor() {
        super(/web\/viewer\/main/);

        // TODO Correct word 'Выберете'
        this.subjectSelect = new Select('.mat-button-base', 'Subject page: subject select', { text: 'Выберете предмет' });
        this.subjectModuleButton = (moduleName: string) => new Button('.mat-list-base .mat-list-text', `Subject page: module "${moduleName}"`,
            { text: moduleName });
        this.baseModuleLabel = new Label('.subject-frame iframe', 'Subject page: module frame');
    }

    selectSubjectByName(name: string) {
        this.subjectSelect.selectByVisibleText(name);
        this.baseModuleLabel.waitForFrameLoaded();
    }

    clickSubjectModule(moduleName: string) {
        this.subjectModuleButton(moduleName).click();
        this.baseModuleLabel.waitForFrameLoaded();
    }
}

export default new SubjectPage();