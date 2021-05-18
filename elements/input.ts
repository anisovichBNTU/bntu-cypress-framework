import { CypressOptions, ElementOptions } from '../types';
import { Element } from './element';

export class Input extends Element {
    constructor(selector: string, name: string, options?: ElementOptions) {
        super(selector, name, options);
    }

    /**
     * Get the text content from a DOM-element
     */
    getValue() {
        return this.get$().then($elem => {
            let text = $elem.val();
            Cypress.log({
                displayName: this.getName(),
                message: `Get text of "${this.name.substr(0, 80)}${this.name.length > 80 ? '...' : ''}": "${text}"`
            });
            return String(text);
        });
    }

    /**
     * Wait until innerText matches
     * @param text - the expression to be matched
     * @param options - the wait options
     */
    waitUntilValueMatches(text: string | number, options?: CypressOptions) {
        this._waitForExistAndDisplayed(options);

        this.getValue().should('include', text).then(() => {
            Cypress.log({
                displayName: this.getName(),
                message: `Value of "${this.name}" is include to "${text}"`
            });
        });

        return true;
    }
}