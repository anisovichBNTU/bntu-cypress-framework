import { ElementOptions } from "../types";
import { Element } from "./element";

export class Button extends Element {
    constructor(selector: string, name: string, options?: ElementOptions) {
        super(selector, name, options);
    }

    /**
     * Double click the element
     */
    doubleClick() {
        this._waitForExist();
        this._doubleClick().then(() => {
            Cypress.log({
                displayName: this.getName(),
                message: `Double click by "${this.name}"`
            });
        });
    }

}