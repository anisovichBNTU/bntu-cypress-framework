import { Button, Label, TextArea } from "../../elements";
import BaseForm from "../../forms/baseForm";
import studentListForm from "./studentListForm";

class GraduationProjectTopicForm extends BaseForm {

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

        this.addTopicButton = new Button('.mat-button-base', 'Graduation project topic: Add topic button',
            { text: 'Добавить тему', intoIFrame: true });
        this.topicNameTextArea = new TextArea('textarea.mat-input-element', 'Graduation project topic: Topic name text area',
            { intoIFrame: true });
        this.saveTopicButton = new Button('.mat-button-base', 'Graduation project topic: Save topic button',
            { text: 'Сохранить', intoIFrame: true });

        this.topicRowLabel = (topicName: string) => new Label('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Graduation project topic: topic (${topicName}) row`,
            { text: topicName, parent: true, intoIFrame: true });

        this.topicNameLabel = (topicName: string) => new Label('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Graduation project topic: topic (${topicName}) name label`,
            { text: topicName, intoIFrame: true });

        this.topicDeleteButton = (topicName: string) => new Button('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Graduation project topic: topic (${topicName}) "Delete" button`,
            {
                childSelector: '.mat-button-base[mattooltip="Удалить"]',
                text: topicName, intoIFrame: true, parent: true
            });
        this.topicAssignButton = (topicName: string) => new Button('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Graduation project topic: topic (${topicName}) "Assign" button`,
            {
                childSelector: '.mat-button-base[mattooltip="Назначить"]',
                text: topicName, intoIFrame: true, parent: true
            });
        this.topicCancelAssignmentButton = (topicName: string) => new Button('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Graduation project topic: topic (${topicName}) "Cancel assignment" button`,
            {
                childSelector: '.mat-button-base[mattooltip="Отменить назначение"]',
                text: topicName, intoIFrame: true, parent: true
            });
        this.topicEditButton = (topicName: string) => new Button('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Graduation project topic: topic (${topicName}) "Edit" button`,
            {
                childSelector: '.mat-button-base[mattooltip="Редактировать"]',
                text: topicName, intoIFrame: true, parent: true
            });
    }

    addNewTopic() {
        this.addTopicButton.click();
    }

    assignStudentToTopic(topicName: string, student: { group: string, random?: boolean, name?: string }) {
        this.topicAssignButton(topicName).click();
        studentListForm.selectGroup(student.group);
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

    assertThatTopicHasStudent(topicName: string, studentName: string) {
        this.topicRowLabel(topicName).waitUntilInnerTextMatches(studentName, { delay: 2000 });
    }

    fillTopicInfo(options: { name: string, groups?: string[] }) {
        this.topicNameTextArea.setValue(options.name);
        this.saveTopicButton.click();
    }

}

export default new GraduationProjectTopicForm();