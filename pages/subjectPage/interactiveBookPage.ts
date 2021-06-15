import { Timeout } from '../../constants/timeout';
import { Button, TextArea, ContextMenu, Label } from '../../elements';
import BasePage from '../basePage';

class InteractiveBookPage extends BasePage {

    private addBookButton: Button;

    private newBookTitleInput: TextArea;
    private newBookTitleSaveButton: Button;
    private bookTopic: (topicTitle: string) => ContextMenu;
    private bookParentTopic: (topicTitle: string) => ContextMenu;
    private bookOpenChildButton: (topicTitle: string) => Button;
    private bookTopicHideIconLabel: (topicTitle: string) => Label;

    private bookContentInput: TextArea;
    private bookContentLabel: TextArea;
    private bookContentSaveButton: Button;

    constructor() {
        super(/web\/viewer\/subject.*libBook/);

        this.addBookButton = new Button('.mat-drawer .flex-search-btn-holder button[ng-reflect-message="Добавление нового учебника"]',
            'Interactive book: Add new book button', { intoIFrame: true });

        this.newBookTitleInput = new TextArea('.cdk-overlay-pane .ck-editor__editable',
            'Interactive book: New book title text area', { intoIFrame: true });
        this.newBookTitleSaveButton = new Button('.mat-dialog-actions button',
            'Interactive book: Save new book button',
            {
                text: 'Сохранить',
                intoIFrame: true
            });

        this.bookTopic = (topicTitle: string) => new ContextMenu('mat-tree-node .mat-tree-node',
            `Interactive book: Book topic (${topicTitle})`,
            {
                dropdownListSelector: '.mat-menu-content', dropdownListItemSelector: '[role="menuitem"]',
                text: topicTitle,
                intoIFrame: true
            });
        this.bookParentTopic = (topicTitle: string) => new ContextMenu('mat-nested-tree-node .mat-tree-node',
            `Interactive book: Book parent topic (${topicTitle})`,
            {
                dropdownListSelector: '.mat-menu-content', dropdownListItemSelector: '[role="menuitem"]',
                text: topicTitle,
                intoIFrame: true
            });
        this.bookOpenChildButton = (topicTitle: string) => new Button('mat-nested-tree-node .mat-tree-node',
            `Interactive book: Book parent topic (${topicTitle})`,
            { text: topicTitle, intoIFrame: true, parent: true, childSelector: 'button.mat-button-base' });
        this.bookTopicHideIconLabel = (topicTitle: string) => new Label('mat-tree-node .mat-tree-node',
            `Interactive book: Book topic (${topicTitle})`,
            {
                text: topicTitle,
                intoIFrame: true,
                parent: true,
                childSelector: 'mat-icon[role="img"]'
            });

        this.bookContentInput = new TextArea('#editor .ck-content', 'Interactive book: Book content text area',
            { intoIFrame: true });
        this.bookContentLabel = new Label('#editor', 'Interactive book: Book content label (not editable)',
            { intoIFrame: true });
        this.bookContentSaveButton = new Button('.flex-editor-container [ng-reflect-message="Сохранить"]',
            'Interactive book: Book content Save button', { intoIFrame: true });
    }

    clickAddNewBook() {
        this.addBookButton.click();
    }

    createNewBook(bookTitle: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.fillNewBookTitle(bookTitle);
        this.clickSaveNewBookTitle();
    }

    selectTopicOption(topicTitle: string, option: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.bookTopic(this.getShortName(topicTitle)).selectByVisibleText(option)
    }

    createChildTopic(childTopicName: string) {
        this.fillNewBookTitle(childTopicName);
        this.clickSaveNewBookTitle();
    }

    fillNewBookTitle(bookTitle: string) {
        this.newBookTitleInput.setValue(bookTitle, true);
    }

    clickSaveNewBookTitle() {
        this.newBookTitleSaveButton.click();
    }

    openInteractiveBook(topicTitle: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.bookTopic(this.getShortName(topicTitle)).click();
    }

    openInteractiveBookParent(topicTitle: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.bookParentTopic(this.getShortName(topicTitle)).click();
    }

    openChildBookTopics(topicTitle: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.bookOpenChildButton(this.getShortName(topicTitle)).click();
    }

    openInteractiveBookToFill(topicTitle: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.bookTopic(this.getShortName(topicTitle)).doubleClick();
    }

    fillBookContent(text: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.bookContentInput.setValue(text);
    }

    saveBookContent() {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.bookContentSaveButton.click();
    }

    assertThatTopicIsDisplayed(topicTitle: string, isDisplayed = true) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.bookTopic(this.getShortName(topicTitle)).waitForDisplayed({
            delay: Timeout.BASE_ADD_DELAY,
            reverse: !isDisplayed
        });
    }

    assertThatTopicHideIconIsDisplayed(topicTitle: string, isDisplayed = true) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.bookTopicHideIconLabel(this.getShortName(topicTitle))
            .waitForDisplayed({ delay: Timeout.BASE_ADD_DELAY, reverse: !isDisplayed });
    }

    assertThatBookContentHasText(text: string[]) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        for (const textItem of text) {
            this.bookContentInput.waitUntilInnerTextMatches(this.getShortName(textItem));
        }
    }

    assertThatNotEditableBookContentHasText(text: string[], isDisplayed = true) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        if (isDisplayed) {
            for (const textItem of text) {
                this.bookContentLabel.waitUntilInnerTextMatches(textItem);
            }
        } else {
            for (const textItem of text) {
                this.bookContentLabel.waitUntilInnerTextNotMatches(textItem);
            }
        }
    }

    private getShortName(topicName: string) {
        return topicName.substr(0, 80);
    }
}

export default new InteractiveBookPage();