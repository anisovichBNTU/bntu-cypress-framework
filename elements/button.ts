import { ElementOptions } from "../types";
import { Element } from "./element";

export class Button extends Element {
    constructor(selector: string, name: string, text?: string, options?: ElementOptions) {
        super(selector, name, text, options);
    }
}