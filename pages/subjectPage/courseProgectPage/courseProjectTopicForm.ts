import { Button, Label, TextArea } from "../../../elements";
import BaseForm from "../../../forms/baseForm";

class CourseProjectTopicForm extends BaseForm {

    addTopicButton: Button;
    topicNameTextArea: TextArea;
    saveTopicButton: Button;

    topicRowLabel: (topicName: string) => Label;

    constructor() {
        super();

        this.addTopicButton = new Button('.mat-button-base', 'Course project topic: Add topic button',
            { text: 'Добавить тему', intoIFrame: true });
        this.topicNameTextArea = new TextArea('textarea.mat-input-element', 'Course project topic: Topic name text area',
            { intoIFrame: true });
        this.saveTopicButton = new Button('.mat-button-base', 'Course project topic: Save topic button',
            { text: 'Сохранить', intoIFrame: true });

        this.topicRowLabel = (topicName: string) => new Label('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Course project topic: topic (${topicName}) row`,
            { text: topicName, intoIFrame: true });
    }

    addNewTopic() {
        this.addTopicButton.click();
    }

    assertThatTopicIsDisplayed(topicName: string) {
        this.topicRowLabel(topicName).waitForDisplayed({ delay: 2000 });
    }

    fillTopicInfo(options: { name: string, groups?: string[] }) {
        this.topicNameTextArea.setValue(options.name);
        this.saveTopicButton.click();
    }

}

export default new CourseProjectTopicForm();