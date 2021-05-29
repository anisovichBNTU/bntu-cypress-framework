import { Timeout } from "../constants/timeout";
import { Button, Label, TextArea } from "../elements";
import BaseForm from "./baseForm";
import studentListForm from "./studentListForm";

class ProjectTopicForm extends BaseForm {

    private addTopicButton: Button;
    private topicNameTextArea: TextArea;
    private saveTopicButton: Button;

    private topicRowLabel: (topicName: string) => Label;
    private topicNameLabel: (topicName: string) => Label;
    private topicDeleteButton: (topicName: string) => Button;
    private topicSelectButton: (topicName: string) => Button;
    private topicConfirmButton: (topicName: string) => Button;
    private topicAssignButton: (topicName: string) => Button;
    private topicCancelAssignmentButton: (topicName: string) => Button;
    private topicEditButton: (topicName: string) => Button;

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
        this.topicSelectButton = (topicName: string) => new Button('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Project topic: topic (${topicName}) "Select" button`,
            {
                childSelector: '.mat-button-base[mattooltip="Выбрать тему"]',
                text: topicName, intoIFrame: true, parent: true
            });
        this.topicConfirmButton = (topicName: string) => new Button('.mdc-data-table__table .mdc-data-table__row.ng-star-inserted',
            `Project topic: topic (${topicName}) "Select" button`,
            {
                childSelector: '.mat-button-base[mattooltip="Подтвердить выбранную тему"]',
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
        cy.wait(Timeout.ADD_TOPIC_DELAY, { log: false });
        this.addTopicButton.click();
    }

    clickEditTopic(topicName: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.topicEditButton(this.getShortName(topicName)).click();
    }

    assignStudentToTopic(topicName: string, student: { group?: string, random?: boolean, name?: string, search?: boolean }) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.topicAssignButton(this.getShortName(topicName)).click();
        if (student.group) {
            studentListForm.selectGroup(student.group);
        }
        if (student.random) {
            studentListForm.assignToStudent();
        }
        if (student.name) {
            studentListForm.assignToStudentByName(student.name, Boolean(student.search));
        }
    }

    selectTopic(topicName: string) {
        cy.wait(Timeout.SELECT_TOPIC_DELAY, { log: false });
        this.topicSelectButton(this.getShortName(topicName)).click();
    }

    confirmTopic(topicName: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.topicConfirmButton(this.getShortName(topicName)).click();
    }

    cancelAssignmentToTopic(topicName: string) {
        cy.wait(Timeout.CANCEL_ASSIGNMENT_DELAY, { log: false });
        this.topicCancelAssignmentButton(this.getShortName(topicName)).click();
    }

    deleteTopic(topicName: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.topicDeleteButton(this.getShortName(topicName)).click();
    }

    assertThatTopicIsDisplayed(topicName: string, isDisplayed = true) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.topicNameLabel(this.getShortName(topicName)).waitForDisplayed({
            delay: Timeout.BASE_ADD_DELAY, reverse: !isDisplayed
        });
    }

    assertThatTopicHasStudent(topicName: string, studentName: string | RegExp, reverse = false) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        if (!reverse) {
            this.topicRowLabel(this.getShortName(topicName)).waitUntilInnerTextMatches(studentName,
                { delay: Timeout.BASE_ADD_DELAY });
        } else {
            this.topicRowLabel(this.getShortName(topicName)).waitUntilInnerTextNotMatches(studentName,
                { delay: Timeout.BASE_ADD_DELAY });
        }
    }

    fillTopicInfo(options: { name: string, groups?: string[] }) {
        this.topicNameTextArea.setValue(options.name, true);
        this.saveTopicButton.click();
    }

    private getShortName(topicName: string) {
        return topicName.substr(0, 100);
    }
}

export default new ProjectTopicForm();