import { Button, Label, TextArea } from "../../elements";
import BaseForm from "../../forms/baseForm";

class GraduationProjectTopicForm extends BaseForm {

    addTopicButton: Button;
    topicNameTextArea: TextArea;
    saveTopicButton: Button;

    topicRowLabel: (topicName: string) => Label;
    topicDeleteButton: (topicName: string) => Button;

    constructor() {
        super();

        this.addTopicButton = new Button('.mat-button-base', 'Graduation project topic: Add topic button',
            { text: 'Добавить тему', intoIFrame: true });
        this.topicNameTextArea = new TextArea('textarea.mat-input-element', 'Graduation project topic: Topic name text area',
            { intoIFrame: true });
        this.saveTopicButton = new Button('.mat-button-base', 'Graduation project topic: Save topic button',
            { text: 'Сохранить', intoIFrame: true });

        this.topicRowLabel = (topicName: string) => new Label('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Graduation project topic: topic (${topicName}) row`,
            { text: topicName, intoIFrame: true });

        this.topicDeleteButton = (topicName: string) => new Button('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Graduation project topic: topic (${topicName}) row`,
            {
                childSelector: '.mat-button-base[mattooltip="Удалить"]',
                text: topicName, intoIFrame: true, parent: true
            });
    }

    addNewTopic() {
        this.addTopicButton.click();
    }

    deleteTopic(topicName: string) {
        this.topicDeleteButton(topicName).click();
    }

    assertThatTopicIsDisplayed(topicName: string, isDisplayed = true) {
        this.topicRowLabel(topicName).waitForDisplayed({ delay: 2000, reverse: !isDisplayed });
    }

    fillTopicInfo(options: { name: string, groups?: string[] }) {
        this.topicNameTextArea.setValue(options.name);
        this.saveTopicButton.click();
    }

}

export default new GraduationProjectTopicForm();