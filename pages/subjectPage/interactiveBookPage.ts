import { Button, Select, TextArea } from '../../elements';
import BasePage from '../basePage';

class InteractiveBookPage extends BasePage {

    addBookButton: Button;

    newBookTitleInput: TextArea;
    newBookTitleSaveButton: Button;
    bookTopic: (topicTitle: string) => Select;

    constructor() {
        super(/web\/viewer\/subject.*libBook/);

        this.addBookButton = new Button('.mat-drawer .flex-search-btn-holder button',
            'Interactive book: add new book button', { intoIFrame: true });

        this.newBookTitleInput = new TextArea('.cdk-overlay-pane .ck-editor__editable',
            'Interactive book: new book title text area', { intoIFrame: true });
        this.newBookTitleSaveButton = new Button('.mat-dialog-actions button',
            'Interactive book: save new book button',
            {
                text: 'Сохранить',
                intoIFrame: true
            });

        this.bookTopic = (topicTitle: string) => new Select('li.mat-tree-node',
            `Interactive book: book topic (${topicTitle})`,
            {
                text: topicTitle,
                intoIFrame: true
            });
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

    assertThatTopicIsDisplayed(topicTitle: string) {
        this.bookTopic(topicTitle).waitForDisplayed();
    }
}

export default new InteractiveBookPage();