import { ElementOptions } from "../types";
import { Element } from "./element";

const DEFAULT_CHECKBOX_SELECTOR = 'input[type="checkbox"]';

export class Checkbox extends Element {
    constructor(selector: string, name: string, options?: ElementOptions) {
        super(selector, name, options);
    }

    /**
     * Check the checkbox (depends on value)
     * @param toCheck - if true, marks the checkbox as checked, otherwise uncheck the checkbox
     */
    check(toCheck = true) {
        this._waitForExist();
        this._waitForEnabled();

        if (toCheck) {
            try {
                this.get$().check({ force: true }).then(() => {
                    Cypress.log({
                        displayName: this.getName(),
                        message: `Checkbox "${this.name}" is checked`
                    });
                });
            } catch (_) {
                this.get$().find(DEFAULT_CHECKBOX_SELECTOR).check({ force: true }).then(() => {
                    Cypress.log({
                        displayName: this.getName(),
                        message: `Checkbox "${this.name}" is checked`
                    });
                });
            }

        } else {
            try {
                this.get$().uncheck({ force: true }).then(() => {
                    Cypress.log({
                        displayName: this.getName(),
                        message: `Checkbox "${this.name}" is unchecked`
                    });
                });
            } catch (_) {
                this.get$().find(DEFAULT_CHECKBOX_SELECTOR).uncheck({ force: true }).then(() => {
                    Cypress.log({
                        displayName: this.getName(),
                        message: `Checkbox "${this.name}" is unchecked`
                    });
                });
            }
        }
    }

}