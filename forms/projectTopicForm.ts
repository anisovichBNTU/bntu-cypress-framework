import { Button, Label, TextArea } from "../elements";
import BaseForm from "./baseForm";
import studentListForm from "./studentListForm";

class ProjectTopicForm extends BaseForm {

    addTopicButton: Button;
    topicNameTextArea: TextArea;
    saveTopicButton: Button;

    topicRowLabel: (topicName: string) => Label;
    topicNameLabel: (topicName: string) => Label;
    topicDeleteButton: (topicName: string) => Button;
    topicAssignButton: (topicName: string) => Button;
    topicCancelAssignmentButton: (topicName: string) => Button;
    topicEditButton: (topicName: string) => Button;

    constructor() {
        super();

        this.addTopicButton = new Button('.mat-button-base', 'Project topic: Add topic button',
            { text: 'Добавить тему', intoIFrame: true });
        this.topicNameTextArea = new TextArea('textarea.mat-input-element', 'Project topic: Topic name text area',
            { intoIFrame: true });
        this.saveTopicButton = new Button('.mat-button-base', 'Project topic: Save topic button',
            { text: 'Сохранить', intoIFrame: true });

        this.topicRowLabel = (topicName: string) => new Label('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Project topic: topic (${topicName}) row`,
            { text: topicName, parent: true, intoIFrame: true });

        this.topicNameLabel = (topicName: string) => new Label('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Project topic: topic (${topicName}) name label`,
            { text: topicName, intoIFrame: true });

        this.topicDeleteButton = (topicName: string) => new Button('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Project topic: topic (${topicName}) "Delete" button`,
            {
                childSelector: '.mat-button-base[mattooltip="Удалить"]',
                text: topicName, intoIFrame: true, parent: true
            });
        this.topicAssignButton = (topicName: string) => new Button('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Project topic: topic (${topicName}) "Assign" button`,
            {
                childSelector: '.mat-button-base[mattooltip="Назначить"]',
                text: topicName, intoIFrame: true, parent: true
            });
        this.topicCancelAssignmentButton = (topicName: string) => new Button('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Project topic: topic (${topicName}) "Cancel assignment" button`,
            {
                childSelector: '.mat-button-base[mattooltip="Отменить назначение"]',
                text: topicName, intoIFrame: true, parent: true
            });
        this.topicEditButton = (topicName: string) => new Button('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Project topic: topic (${topicName}) "Edit" button`,
            {
                childSelector: '.mat-button-base[mattooltip="Редактировать"]',
                text: topicName, intoIFrame: true, parent: true
            });
    }

    addNewTopic() {
        this.addTopicButton.click();
    }

    clickEditTopic(topicName: string) {
        this.topicEditButton(topicName).click();
    }

    assignStudentToTopic(topicName: string, student: { group?: string, random?: boolean, name?: string }) {
        this.topicAssignButton(topicName).click();
        if (student.group) {
            studentListForm.selectGroup(student.group);
        }
        if (student.random) {
            studentListForm.assignToStudent();
        }
        if (student.name) {
            studentListForm.assignToStudentByName(student.name);
        }
    }

    cancelAssignmentToTopic(topicName: string) {
        this.topicCancelAssignmentButton(topicName).click();
    }

    deleteTopic(topicName: string) {
        this.topicDeleteButton(topicName).click();
    }

    assertThatTopicIsDisplayed(topicName: string, isDisplayed = true) {
        this.topicNameLabel(topicName).waitForDisplayed({ delay: 2000, reverse: !isDisplayed });
    }

    assertThatTopicHasStudent(topicName: string, studentName: string | RegExp, reverse = false) {
        if (!reverse) {
            this.topicRowLabel(topicName).waitUntilInnerTextMatches(studentName, { delay: 2000 });
        } else {
            this.topicRowLabel(topicName).waitUntilInnerTextNotMatches(studentName, { delay: 2000 });
        }
    }

    fillTopicInfo(options: { name: string, groups?: string[] }) {
        this.topicNameTextArea.setValue(options.name, true);
        this.saveTopicButton.click();
    }

}

export default new ProjectTopicForm();