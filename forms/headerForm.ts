import { Button } from '../elements';
import BaseForm from './baseForm';

class HeaderForm extends BaseForm {

    private subjectsButton: Button;
    private graduationProjectButton: Button;

    constructor() {
        super();

        this.subjectsButton = new Button('.mat-button-base', 'Header: Subjects button', { text: 'Предметы' });
        this.graduationProjectButton = new Button('.mat-button-base', 'Header: Subjects button',
            { text: 'Дипломное проектирование' });
    }

    clickSubjectButton() {
        this.subjectsButton.click();
    }

    clickGraduationProjectButtonButton() {
        this.graduationProjectButton.click();
    }

}

export default new HeaderForm();