import { Button } from '../elements';
import BaseForm from './baseForm';

class DialogForm extends BaseForm {

    acceptButton: Button;

    constructor() {
        super();

        this.acceptButton = new Button('.mat-dialog-container[aria-modal="true"] .mat-button-base.mat-primary',
            'Dialog: Accept button', { intoIFrame: true });
    }

    clickAcceptButton() {
        this.acceptButton.click();
    }

}

export default new DialogForm();