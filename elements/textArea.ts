import { ElementOptions } from '../types';
import { Element } from './element';

export class TextArea extends Element {
    constructor(selector: string, name: string, options?: ElementOptions) {
        super(selector, name, options);
    }

    /**
     * Set value to the element (text area)
     * @param value
     * @param options
     */
    setValue(value: string, clear = false) {
        this._waitForExist();
        if (clear) {
            this._clearValue();
        }
        this._setValue(value).then(() => {
            Cypress.log({
                displayName: this.getName(),
                message: `Set value "${value}" to "${this.name}"`
            });
        });
    }
}