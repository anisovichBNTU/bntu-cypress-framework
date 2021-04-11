import { Element } from './element';

export class Input extends Element {
    constructor(selector: string, name: string, text?: string) {
        super(selector, name, text);
    }
}