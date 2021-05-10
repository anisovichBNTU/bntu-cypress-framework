import { Button, Input, Select } from "../elements";
import BaseForm from "./baseForm";

class StudentListForm extends BaseForm {

    groupSelect: Select;
    studentSearchInput: Input;
    studentAssignButton: Button;
    studentAssignButtonByName: (topicName: string) => Button;

    constructor() {
        super();

        this.groupSelect = new Select('.group-select .mat-select', 'Student form: Group select',
            { intoIFrame: true, dropdownListSelector: '.mat-select-panel', dropdownListItemSelector: 'mat-option' });
        this.studentSearchInput = new Input('mat-dialog-container .mat-form-field-infix input',
            'Student form: search input', { intoIFrame: true, });

        this.studentAssignButton = new Button('.mat-dialog-content .mat-row.ng-star-inserted ' +
            '.mat-button-base[mattooltip="Назначить"]', 'Student form: "Assign" button', { intoIFrame: true, });
        this.studentAssignButtonByName = (studentName: string) => new Button('.mat-dialog-content .mat-row.ng-star-inserted',
            `Student form: '${studentName}' "Assign" button`,
            {
                childSelector: '.mat-button-base[mattooltip="Назначить"]',
                text: studentName, intoIFrame: true, parent: true
            });
    }

    selectGroup(group: string) {
        this.groupSelect.selectByVisibleText(group);
    }

    assignToStudent() {
        this.studentAssignButton.click(1);
    }

    assignToStudentByName(studentName: string) {
        this.studentSearchInput.setValue(studentName);
        this.studentAssignButtonByName(studentName).click();
    }

}

export default new StudentListForm();