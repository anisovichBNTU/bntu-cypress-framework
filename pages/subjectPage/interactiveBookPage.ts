import { Button, TextArea } from '../../elements';
import { ContextMenu } from '../../elements/contextMenu';
import BasePage from '../basePage';

class InteractiveBookPage extends BasePage {

    private addBookButton: Button;

    private newBookTitleInput: TextArea;
    private newBookTitleSaveButton: Button;
    private bookTopic: (topicTitle: string) => ContextMenu;
    private bookParentTopic: (topicTitle: string) => ContextMenu;
    private bookOpenChildButton: (topicTitle: string) => Button;

    private bookContentInput: TextArea;
    private bookContentSaveButton: Button;

    constructor() {
        super(/web\/viewer\/subject.*libBook/);

        this.addBookButton = new Button('.mat-drawer .flex-search-btn-holder button',
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

        this.bookContentInput = new TextArea('#editor .ck-content', 'Interactive book: Book content text area',
            { intoIFrame: true });
        this.bookContentSaveButton = new Button('.flex-editor-container .btn-holder button',
            'Interactive book: Book content Save button', { intoIFrame: true, text: 'Сохранить' });
    }

    clickAddNewBook() {
        this.addBookButton.click();
    }

    createNewBook(bookTitle: string) {
        this.fillNewBookTitle(bookTitle);
        this.clickSaveNewBookTitle();
    }

    selectTopicOption(topicTitle: string, option: string) {
        this.bookTopic(topicTitle).selectByVisibleText(option)
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
        this.bookTopic(topicTitle).click();
    }

    openInteractiveBookParent(topicTitle: string) {
        this.bookParentTopic(topicTitle).click();
    }

    openChildBookTopics(topicTitle: string) {
        this.bookOpenChildButton(topicTitle).click();
    }

    openInteractiveBookToFill(topicTitle: string) {
        this.bookTopic(topicTitle).doubleClick();
    }

    fillBookContent(text: string) {
        this.bookContentInput.setValue(text);
    }

    saveBookContent() {
        this.bookContentSaveButton.click();
    }

    assertThatTopicIsDisplayed(topicTitle: string, isDisplayed = true) {
        this.bookTopic(topicTitle).waitForDisplayed({ delay: 2000, reverse: !isDisplayed });
    }

    assertThatBookContentHasText(text: string[]) {
        for (const textItem of text) {
            this.bookContentInput.waitUntilInnerTextMatches(textItem);
        }
    }
}

export default new InteractiveBookPage();