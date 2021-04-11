import { Element } from "./element";

export class Label extends Element {
    constructor(selector: string, name: string, text?: string) {
        super(selector, name, text);
    }
}