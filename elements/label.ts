import { ElementOptions } from "../types";
import { Element } from "./element";

export class Label extends Element {
    constructor(selector: string, name: string, options?: ElementOptions) {
        super(selector, name, options);
    }
}