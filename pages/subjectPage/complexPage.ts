import { Timeout } from '../../constants/timeout';
import { Button, TextArea, Label, Select, Input } from '../../elements';
import BasePage from '../basePage';

class ComplexPage extends BasePage {

    private addComplexButton: Button;

    private newComplexNameInput: TextArea;
    private newComplexNameSaveButton: Button;
    private complexNameButton: (name: string) => Button;
    private complexActionsSelect: (name: string) => Select;
    private complexSectionMapButton: (name: string) => Button;
    private complexSectionButton: (name: string) => Button;

    private sectionAddHeaderLabel: Label;
    private addSectionButton: Button;
    private sectionToAddSelect: Select;
    private newSectionFolderName: Input;
    private newSectionFileName: Input;
    private uploadFileInput: Input;
    private folderButton: Button;
    private fileButton: Button;

    constructor() {
        super(/web\/viewer\/subject.*complex/);

        this.addComplexButton = new Button('.button-ripple-container[opentip-title="Добавить ЭУМК"]',
            'EEM Complex: Add new complex button', { intoIFrame: true });

        this.newComplexNameInput = new TextArea('mat-dialog-container textarea[name="body"]',
            'EEM Complex: New complex name text area', { intoIFrame: true });
        this.newComplexNameSaveButton = new Button('.mat-dialog-actions button',
            'EEM Complex: Save new complex name button',
            {
                text: 'Сохранить',
                intoIFrame: true
            });

        this.complexNameButton = (name: string) => new Button('.mat-ripple a',
            `EEM Complex: Complex name (${name}) button`,
            {
                text: name,
                intoIFrame: true
            });
        this.complexActionsSelect = (name: string) => new Select('.mat-figure div.ripple-container a',
            `EEM Complex: Complex (${name}) actions select`,
            {
                parent: true, parentSelector: 'figure', childSelector: 'grid-menu-icon mat-icon',
                dropdownListSelector: '.mat-menu-content', dropdownListItemSelector: '[role="menuitem"]',
                text: name,
                intoIFrame: true
            });

        this.complexSectionMapButton = (name: string) => new Button('.d3-chart g.node',
            `EEM Complex: Map section (${name}) button`,
            {
                text: name,
                intoIFrame: true
            });

        this.complexSectionButton = (name: string) => new Button('mat-tree .ng-star-inserted li',
            `EEM Complex: Section (${name}) button`,
            {
                text: name,
                intoIFrame: true
            });

        this.addSectionButton = new Button('.materials-body .mat-button-base',
            'EEM Complex: Add Section button',
            {
                text: 'Добавить элемент',
                intoIFrame: true
            });
        this.sectionAddHeaderLabel = new Label('.mat-dialog-title', 'EEM Complex: Added section header label',
            {
                intoIFrame: true
            });
        this.sectionToAddSelect = new Select('.basic-container .mat-menu-trigger.mat-button-base',
            `EEM Complex: Section to add new element select`,
            {
                dropdownListSelector: '.mat-menu-content', dropdownListItemSelector: '[role="menuitem"]',
                intoIFrame: true
            });
        this.folderButton = new Button('mat-radio-button .mat-radio-label-content',
            'EEM Complex: Section type "Folder" button',
            {
                text: 'Папка',
                intoIFrame: true
            });
        this.fileButton = new Button('.mat-radio-button .mat-radio-label-content', 'EEM Complex: Section type "File" button',
            {
                text: 'Файл',
                intoIFrame: true
            });
        this.newSectionFolderName = new Input('input[name="foderName"]', `EEM Complex: New section folder name input`,
            {
                intoIFrame: true
            });
        this.newSectionFileName = new Input('input[name="fileName"]', `EEM Complex: New section file name input`,
            {
                intoIFrame: true
            });
        this.uploadFileInput = new Input('input[type="file"]', `EEM Complex: Upload file input`,
            {
                intoIFrame: true
            });
    }

    clickAddNewComplex() {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.addComplexButton.click();
    }

    createNewComplex(name: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.fillNewComplexName(name);
        this.clickSaveNewComplex();
    }

    selectComplexAction(name: string, option: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.complexActionsSelect(this.getShortName(name)).selectByVisibleText(option);
    }

    fillNewComplexName(name: string) {
        this.newComplexNameInput.setValue(name, true);
    }

    clickSaveNewComplex() {
        this.newComplexNameSaveButton.click();
    }

    openComplex(name: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.complexNameButton(this.getShortName(name)).click();
    }

    clickAddSection() {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.addSectionButton.click();
    }

    addNewFolderSection(sectionToAdd: string, folderName: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.sectionToAddSelect.selectByVisibleText(sectionToAdd);
        this.sectionAddHeaderLabel.doubleClick();
        this.folderButton.click();
        this.newSectionFolderName.setValue(folderName);
        this.newComplexNameSaveButton.click();
    }

    addNewFileSection(sectionToAdd: string, fileName: string, filePath: string) {
        cy.wait(Timeout.BASE_DELAY, { log: false });
        this.sectionToAddSelect.selectByVisibleText(sectionToAdd);
        this.sectionAddHeaderLabel.doubleClick();
        this.fileButton.click();
        this.newSectionFileName.setValue(fileName);
        this.uploadFileInput.uploadFile(filePath);
        cy.wait(Timeout.FILE_UPLOAD_DELAY, { log: false });
        this.newComplexNameSaveButton.doubleClick();
    }

    assertThatComplexIsDisplayed(name: string, isDisplayed = true) {
        this.complexNameButton(this.getShortName(name)).waitForDisplayed({
            delay: Timeout.BASE_ADD_DELAY,
            reverse: !isDisplayed
        });
    };

    assertThatComplexMapSectionIsDisplayed(name: string, isDisplayed = true) {
        this.complexSectionMapButton(name).waitForDisplayed({
            delay: Timeout.COMPLEX_MAP_DELAY,
            reverse: !isDisplayed
        });
    };

    assertThatComplexSectionIsDisplayed(name: string, isDisplayed = true) {
        this.complexSectionButton(name).waitForDisplayed({
            delay: Timeout.COMPLEX_MAP_DELAY,
            reverse: !isDisplayed
        });
    };

    private getShortName(topicName: string) {
        return topicName.substr(0, 8);
    }
}

export default new ComplexPage();