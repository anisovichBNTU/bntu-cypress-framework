import { Button } from '../elements';
import BaseForm from './baseForm';

class HeaderForm extends BaseForm {

    subjectsButton: Button;

    constructor() {
        super();

        this.subjectsButton = new Button('.mat-button-base', 'Header: Subjects button', { text: 'Предметы' })
    }

    clickSubjectButton() {
        this.subjectsButton.click();
    }

}

export default new HeaderForm();