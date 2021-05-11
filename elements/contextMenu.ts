import { Element, Button } from ".";
import { ElementOptions, SelectOptions } from "../types";
import { Select } from "./select";

/**
 * This implements context menu element
 * The list of options is not an inner element of the selector
 */
export class ContextMenu extends Select {

    /**
     * The context menu select
     * @param selector - the selector to the select button
     * @param name - the name of the element
     * @param options - the options for customization of the select if needed
     */
    constructor(selector: string, name: string, options?: SelectOptions & ElementOptions) {
        super(selector, name, options);

        this.intoIFrame = options && options.intoIFrame || false;
        this.valueNodeSelector =
            options && options.dropdownListItemSelector || 'a span.menu-link-item';
        this.dropdownListSelector =
            options && options.dropdownListSelector || '[role="menu"].mat-menu-panel';
    }

    /**
     * Click on the selector and select from the dropdown by the visible text
     * @param value - the textual value from the dropdown list item
     */
    selectByVisibleText(value: string) {
        const selectedItem = new Button(`${this.dropdownListSelector} ${this.valueNodeSelector}`, 
        `Selected item "${value}"`, { text: value, intoIFrame: this.intoIFrame })
        this._waitForExist();
        this._rightClick();
        selectedItem.click();
    }

}
