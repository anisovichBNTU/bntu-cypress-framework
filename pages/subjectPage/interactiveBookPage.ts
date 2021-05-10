import { Button, Select, TextArea } from '../../elements';
import BasePage from '../basePage';

class InteractiveBookPage extends BasePage {

    addBookButton: Button;

    newBookTitleInput: TextArea;
    newBookTitleSaveButton: Button;
    bookTopic: (topicTitle: string) => Select;

    bookContentInput: TextArea;
    bookContentSaveButton: Button;

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

        this.bookTopic = (topicTitle: string) => new Select('li.mat-tree-node',
            `Interactive book: Book topic (${topicTitle})`,
            {
                text: topicTitle,
                intoIFrame: true
            });

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

    fillNewBookTitle(bookTitle: string) {
        this.newBookTitleInput.setValue(bookTitle);
    }

    clickSaveNewBookTitle() {
        this.newBookTitleSaveButton.click();
    }

    openInteractiveBook(topicTitle: string) {
        this.bookTopic(topicTitle).doubleClick();
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

    assertThatTopicIsDisplayed(topicTitle: string) {
        this.bookTopic(topicTitle).waitForDisplayed({ delay: 2000 });
    }

    assertThatBookContentHasText(text: string[]) {
        for (const textItem of text) {
            this.bookContentInput.waitUntilInnerTextMatches(textItem);
        }
    }
}

export default new InteractiveBookPage();