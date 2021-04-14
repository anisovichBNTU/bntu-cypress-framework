import { ElementOptions } from "../types";
import { Element } from "./element";

export class Button extends Element {
    constructor(selector: string, name: string, options?: ElementOptions) {
        super(selector, name, options);
    }

    /**
     * Click the element
     */
    doubleClick() {
        this._waitForExist();
        this._doubleClick();
    }

    protected _doubleClick(options?: { element: Cypress.Chainable<JQuery<HTMLElement>> }) {
        this._waitForLogWrapper(() => {
            if (options && options.element) {
                options.element.dblclick();
            } else {
                this.get$().dblclick();
            }
        });
    }
}