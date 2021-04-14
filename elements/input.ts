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
        return this.get$()
            .invoke('val');
    }

    /**
     * Wait until innerText matches
     * @param text - the expression to be matched
     * @param options - the wait options
     */
    waitUntilValueMatches(text: string | number, options?: CypressOptions) {
        this._waitForExistAndDisplayed(options);

        this.getValue().should('include', text);

        return true;
    }
}