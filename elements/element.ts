import { fakeServer } from "cypress/types/sinon";
import { CypressOptions, ElementOptions } from "../types";

export class Element {
    protected selector: string;
    readonly name: string;
    readonly text: string | undefined;
    readonly options: ElementOptions | undefined;

    /**
     * The element
     * @param selector - the selector to the element
     * @param name - the name of the element
     * @param options 
     */
    constructor(selector: string, name: string, options?: ElementOptions) {
        this.selector = selector;
        this.name = name;
        this.text = options?.text;
        this.options = options;
    }

    protected get$(options?: CypressOptions): Cypress.Chainable<JQuery<HTMLElement>> {
        cy.wait(200, { log: false });
        if (!(this.options && this.options.intoIFrame)) {
            if (!this.text) {
                return cy.get(this.selector, { log: false, ...options });
            } else {
                if (this.options && this.options.parent) {
                    const parentSelector = this.options && this.options.parentSelector || false;
                    if (this.options && this.options.childSelector) {
                        return cy.get(this.selector, { log: false, ...options }).contains(this.text, { log: false })
                            .closest(parentSelector || this.selector, { log: false }).find(this.options.childSelector, { log: false });
                    } else {
                        return cy.get(this.selector, { log: false, ...options }).contains(this.text, { log: false })
                            .closest(parentSelector || this.selector, { log: false });
                    }
                } else {
                    return cy.get(this.selector, { log: false, ...options }).contains(this.text, { log: false })
                }
            }
        } else {
            const frameSelector = this.options.frameSelector || 'iframe';
            cy.frameLoaded(frameSelector, { log: false, ...options });
            if (!this.text) {
                return cy.iframe(frameSelector, { log: false }).find(this.selector, { log: false, ...options });
            } else {
                if (this.options && this.options.parent) {
                    const parentSelector = this.options && this.options.parentSelector || false;
                    if (this.options && this.options.childSelector) {
                        return cy.iframe(frameSelector, { log: false }).find(this.selector, { log: false, ...options })
                            .contains(this.text, { log: false }).closest(parentSelector || this.selector, { log: false })
                            .find(this.options.childSelector, { log: false });
                    } else {
                        return cy.iframe(frameSelector, { log: false }).find(this.selector, { log: false, ...options })
                            .contains(this.text, { log: false }).closest(parentSelector || this.selector, { log: false });
                    }
                } else {
                    return cy.iframe(frameSelector, { log: false }).find(this.selector, { log: false, ...options })
                        .contains(this.text, { log: false });
                }
            }
        }
    }

    /**
     * Click the element
     */
    click(index?: number) {
        this._waitForExist();
        cy.wait(100, { log: false });
        this._click({ index }).then(() => {
            Cypress.log({
                displayName: this.getName(),
                message: `Click by "${this.name}"`
            });
        });
    }

    protected _click(options?: { element?: Cypress.Chainable<JQuery<HTMLElement>>, index?: number }) {
        return this._waitForLogWrapper(() => {
            if (options && options.element) {
                return options.element
                    .click({ force: true, log: false });
            } else {
                if (options && options.index) {
                    return this.get$().eq(options.index - 1)
                        .click({ force: true, log: false });
                }
                else {
                    return this.get$()
                        .click({ force: true, log: false });
                }
            }
        });
    }

    /**
     * Double click the element
     */
    rightClick() {
        this._waitForExist();
        this._rightClick().then(() => {
            Cypress.log({
                displayName: this.getName(),
                message: `Right click by "${this.name}"`
            });
        });
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

    protected _doubleClick(options?: { element: Cypress.Chainable<JQuery<HTMLElement>> }) {
        return this._waitForLogWrapper(() => {
            if (options && options.element) {
                return options.element.dblclick({ force: true });
            } else {
                return this.get$().dblclick({ force: true });
            }
        });
    }

    protected _rightClick(options?: { element: Cypress.Chainable<JQuery<HTMLElement>> }) {
        return this._waitForLogWrapper(() => {
            if (options && options.element) {
                return options.element.rightclick({ force: true });
            } else {
                return this.get$().rightclick({ force: true });
            }
        });
    }

    /**
     * Get the text content from a DOM-element
     */
    getText() {
        return this.get$().then($elem => {
            const text = $elem.text();
            Cypress.log({
                displayName: this.getName(),
                message: `Get text of "${this.name.substr(0, 80)}${this.name.length > 80 ? '...' : ''}":` +
                    ` "${text.substr(0, 80)}${text.length > 80 ? '...' : ''}"`
            });
            return text;
        });
    }

    /**
     * Set value to the element (input)
     * @param value
     * @param options
     */
    setValue(value: string, clear = false) {
        this._waitForExist();
        this._waitForEnabled();
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

    protected _setValue(value: string, options?: { element: Cypress.Chainable<JQuery<HTMLElement>> }) {
        return this._waitForLogWrapper(() => {
            if (options && options.element) {
                return options.element
                    .click({ log: false }).type(value, { log: false });
            } else {
                return this.get$()
                    .click({ log: false }).type(value, { log: false });
            }
        });
    }

    /**
     * Clear the element (input)
     */
    clearValue() {
        this._waitForExist();
        this._waitForEnabled();
        this._clearValue().then(() => {
            Cypress.log({
                displayName: this.getName(),
                message: `Value is cleared for "${this.name}"`
            });
        });
    }

    protected _clearValue(options?: { element: Cypress.Chainable<JQuery<HTMLElement>> }) {
        return this._waitForLogWrapper(() => {
            if (options && options.element) {
                return options.element.clear();
            } else {
                return this.get$().clear();
            }
        });
    }

    /**
     * Clear the element (input)
     */
    uploadFile(fileName: string) {
        this._waitForExist();
        this._waitForEnabled();
        this._uploadFile(fileName).then(() => {
            Cypress.log({
                displayName: this.getName(),
                message: `Upload file "${fileName}"`
            });
        });
    }

    protected _uploadFile(fileName: string, options?: { element: Cypress.Chainable<JQuery<HTMLElement>> }) {
        return this._waitForLogWrapper(() => {
            if (options && options.element) {
                return options.element.attachFile(fileName);
            } else {
                return this.get$().attachFile(fileName);
            }
        });
    }

    /**
     * Scroll into view of the current element. It's useful to force to play animation on some elements.
     */
    scrollIntoView() {
        this.get$()
            .scrollIntoView().then(() => {
                Cypress.log({
                    displayName: this.getName(),
                    message: `Scroll to "${this.name}"`
                });
            });
        cy.wait(300, { log: false });
    }

    /**
     * Wait until the element is displayed
     */
    waitForDisplayed(options?: CypressOptions) {
        const isNegativeNeeded = options && options.reverse;
        const msgNotNegate = !isNegativeNeeded ? ' ' : ' not ';

        this._waitForExistAndDisplayed(options).then(() => {
            Cypress.log({
                displayName: this.getName(),
                message: `Element "${this.name}" is${msgNotNegate}displaying"`
            });
        });
    }

    /**
     * Wait until the iFrame element is loaded
     */
    waitForFrameLoaded(options?: CypressOptions) {
        this._waitForExist(options);
        this.get$().frameLoaded().then(() => {
            Cypress.log({
                displayName: `${this.getName()} frame`,
                message: `Frame is loaded`
            });
        });
    }

    /**
     * Wait until the element is exist
     */
    waitForExist(options?: CypressOptions) {
        this._waitForExist({
            timeout: options && options.timeout,
            reverse: options && options.reverse,
        });
    }

    /**
     * Wait until innerText matches
     * @param text - the expression to be matched
     * @param options - the wait options
     */
    waitUntilInnerTextMatches(text: string | RegExp, options?: CypressOptions) {
        const isNegativeNeeded = options && options.reverse;
        const msgNotNegate = !isNegativeNeeded ? ' ' : ' not ';
        const shouldOption = isNegativeNeeded ? 'not.' : '';

        this._waitForExistAndDisplayed(options);
        if (typeof text === 'string') {
            this.getText().should(`${shouldOption}include`, text).then(() => {
                Cypress.log({
                    displayName: this.getName(),
                    message: `Inner text of "${this.name}" is${msgNotNegate}include to "${text}"`
                });
            });
        } else {
            this.getText().should(`${shouldOption}match`, text).then(() => {
                Cypress.log({
                    displayName: this.getName(),
                    message: `Inner text of "${this.name}" is${msgNotNegate}match to "${text}"`
                });
            });
        }

        return true;
    }

    /**
     * Wait until innerText not matches
     * @param text - the expression to be matched
     * @param options - the wait options
     */
    waitUntilInnerTextNotMatches(text: string | RegExp, options?: CypressOptions) {
        this._waitForExistAndDisplayed(options);
        if (typeof text === 'string') {
            this.getText().should('not.include', text);
        } else {
            this.getText().should('not.match', text);
        }
        return true;
    }

    /**
     * Wait until class matches.
     * It could be used to wait until class is changed, e.g. for animation or UI logic
     * @param className - the expression to be matched
     * @param options - the wait options
     */
    waitUntilClassMatches(className: string, options?: CypressOptions) {
        this._waitForExistAndDisplayed(options);

        this.get$().should('have.class', className).then(() => {
            Cypress.log({
                displayName: this.getName(),
                message: `Class(-es) of "${this.name}" is have "${className}"`
            });
        });

        return true;
    }

    /**
     * Wait until class is not match.
     * It could be used to wait until class is changed, e.g. for animation or UI logic
     * @param className - the expression to be matched
     * @param options - the wait options
     */
    waitUntilClassNotMatches(className: string, options?: CypressOptions) {
        this._waitForExistAndDisplayed(options);

        this.get$()
            .should('not.have.class', className).then(() => {
                Cypress.log({
                    displayName: this.getName(),
                    message: `Class(-es) of "${this.name}" is not have "${className}"`
                });
            });

        return true;
    }

    /**
     * Return an attribute value from the DOM node
     * @param attributeName - the name of the attribute
     */
    waitUntilAttributeMatches(attributeName: string, attributeValue: string, options?: CypressOptions) {
        this._waitForExistAndDisplayed(options);
        this.get$()
            .invoke('attr', attributeName)
            .should('include', attributeValue).then(() => {
                Cypress.log({
                    displayName: this.getName(),
                    message: `Attributed(-es) "${attributeName}" of "${this.name}" is have "${attributeValue}"`
                });
            });
    }

    /**
     * Wait until the element exist and displayed
     */
    protected _waitForExistAndDisplayed(options?: CypressOptions) {
        const option = {
            delay: options && options.delay,
            timeout: options && options.timeout,
            reverse: options && options.reverse,
        }
        if (options && options.reverse) {
            return this._waitForExist(option);
        } else {
            this._waitForExist(option);
            return this._waitForDisplayed(option);
        }
    }

    protected _waitForEnabled(options?: CypressOptions & { element?: Cypress.Chainable<JQuery<HTMLElement>> }) {

        return this._waitForLogWrapper(() => {
            if (options && options.element) {
                return options.element.should('be.enabled');
            } else {
                return this.get$(options).should('be.enabled');
            }
        });
    }

    protected _waitForDisplayed(options?: CypressOptions & { element?: Cypress.Chainable<JQuery<HTMLElement>> }) {

        const isReverse = options && options.reverse
        const shouldOption = isReverse ? 'not.' : '';

        return this._waitForLogWrapper(() => {
            if (options && options.element) {
                return options.element.should(`${shouldOption}be.visible`);
            } else {
                return this.get$(options).should(`${shouldOption}be.visible`);
            }
        });
    }

    protected _waitForExist(options?: CypressOptions & { element?: Cypress.Chainable<JQuery<HTMLElement>> }) {

        const isReverse = options && options.reverse
        const shouldOption = isReverse ? 'not.' : '';
        if (options && options.delay) {
            cy.wait(options.delay);
        }

        return this._waitForLogWrapper(() => {
            if (options && options.element) {
                return options.element.should(`${shouldOption}exist`);
            } else {
                return this.get$(options).should(`${shouldOption}exist`);
            }
        });
    }


    protected _waitForLogWrapper(_waitForFunction: any) {
        try {
            return _waitForFunction();
        } catch (e) {
            cy.log(`Element error "${this.name}": ${e.message}`);
            throw e;
        }
    }

    protected getName() {
        return (<any>this).constructor.name;
    }
}
