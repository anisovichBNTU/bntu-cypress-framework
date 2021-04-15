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
     setValue(value: string) {
        this._waitForExist();
        this._setValue(value);
    }
}