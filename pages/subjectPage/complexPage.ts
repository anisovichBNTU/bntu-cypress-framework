import { Button, TextArea, Label, Select } from '../../elements';
import BasePage from '../basePage';

class ComplexPage extends BasePage {

    private addComplexButton: Button;

    private newComplexNameInput: TextArea;
    private newComplexNameSaveButton: Button;
    private complexNameButton: (name: string) => Button;
    private complexActionsSelect: (name: string) => Select;
    private complexSectionMapButton: (name: string) => Button;
    private complexSectionButton: (name: string) => Button;

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
    }

    clickAddNewComplex() {
        this.addComplexButton.click();
    }

    createNewComplex(name: string) {
        this.fillNewComplexName(name);
        this.clickSaveNeComplex();
    }

    selectComplexAction(name: string, option: string) {
        this.complexActionsSelect(this.getShortName(name)).selectByVisibleText(option);
    }

    fillNewComplexName(name: string) {
        this.newComplexNameInput.setValue(name, true);
    }

    clickSaveNeComplex() {
        this.newComplexNameSaveButton.click();
    }

    openComplex(name: string) {
        this.complexNameButton(this.getShortName(name)).click();
    }

    assertThatComplexIsDisplayed(name: string, isDisplayed = true) {
        this.complexNameButton(this.getShortName(name)).waitForDisplayed({ delay: 2000, reverse: !isDisplayed });
        this.complexNameButton(this.getShortName(name)).waitUntilInnerTextMatches(name);
        this.complexNameButton(this.getShortName(name)).scrollIntoView();
    };

    assertThatComplexMapSectionIsDisplayed(name: string, isDisplayed = true) {
        this.complexSectionMapButton(name).waitForDisplayed({ delay: 2000, reverse: !isDisplayed });
    };

    assertThatComplexSectionIsDisplayed(name: string, isDisplayed = true) {
        this.complexSectionButton(name).waitForDisplayed({ delay: 2000, reverse: !isDisplayed });
    };

    private getShortName(topicName: string) {
        return topicName.substr(0, 100);
    }
}

export default new ComplexPage();