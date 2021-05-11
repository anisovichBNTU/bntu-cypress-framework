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
        if (!(this.options && this.options.intoIFrame)) {
            if (!this.text) {
                return cy.get(this.selector, { log: false, ...options });
            } else {
                if (this.options && this.options.parent) {
                    if (this.options && this.options.childSelector) {
                        return cy.get(this.selector, { log: false, ...options }).contains(this.text, { log: false })
                            .parent(this.selector, { log: false }).find(this.options.childSelector, { log: false });
                    } else {
                        return cy.get(this.selector, { log: false, ...options }).contains(this.text, { log: false })
                            .parent(this.selector, { log: false });
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
                    if (this.options && this.options.childSelector) {
                        return cy.iframe(frameSelector, { log: false }).find(this.selector, { log: false, ...options })
                            .contains(this.text, { log: false }).parent(this.selector, { log: false })
                            .find(this.options.childSelector, { log: false });
                    } else {
                        return cy.iframe(frameSelector, { log: false }).find(this.selector, { log: false, ...options })
                            .contains(this.text, { log: false }).parent(this.selector, { log: false });
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
        this._click({ index });
    }

    /**
     * Double click the element
     */
    rightClick() {
        this._waitForExist();
        this._rightClick();
    }

    /**
     * Double click the element
     */
    doubleClick() {
        this._waitForExist();
        this._doubleClick();
    }

    protected _click(options?: { element?: Cypress.Chainable<JQuery<HTMLElement>>, index?: number }) {
        this._waitForLogWrapper(() => {
            if (options && options.element) {
                options.element.click({ force: true });
            } else {
                if (options && options.index) {
                    this.get$().eq(options.index - 1).click({ force: true });
                }
                else {
                    this.get$().click({ force: true });
                }
            }
        });
    }

    protected _doubleClick(options?: { element: Cypress.Chainable<JQuery<HTMLElement>> }) {
        this._waitForLogWrapper(() => {
            if (options && options.element) {
                options.element.dblclick({ force: true });
            } else {
                this.get$().dblclick({ force: true });
            }
        });
    }

    protected _rightClick(options?: { element: Cypress.Chainable<JQuery<HTMLElement>> }) {
        this._waitForLogWrapper(() => {
            if (options && options.element) {
                options.element.rightclick({ force: true });
            } else {
                this.get$().rightclick({ force: true });
            }
        });
    }

    /**
     * Get the text content from a DOM-element
     */
    getText() {
        return this.get$()
            .invoke('text');
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
        this._setValue(value);
    }

    protected _setValue(value: string, options?: { element: Cypress.Chainable<JQuery<HTMLElement>> }) {
        return this._waitForLogWrapper(() => {
            if (options && options.element) {
                options.element.click().type(value);
            } else {
                this.get$().click().type(value);
            }
        });
    }

    /**
     * Clear the element (input)
     */
    clearValue() {
        this._waitForExist();
        this._waitForEnabled();
        this._clearValue();
    }

    protected _clearValue(options?: { element: Cypress.Chainable<JQuery<HTMLElement>> }) {
        this._waitForLogWrapper(() => {
            if (options && options.element) {
                options.element.clear();
            } else {
                this.get$().clear();
            }
        });
    }

    /**
     * Scroll into view of the current element. It's useful to force to play animation on some elements.
     */
    scrollIntoView() {
        this.get$()
            .scrollIntoView()
    }

    /**
     * Wait until the element is displayed
     */
    waitForDisplayed(options?: CypressOptions) {
        this._waitForExistAndDisplayed(options);
    }

    /**
     * Wait until the iFrame element is loaded
     */
    waitForFrameLoaded(options?: CypressOptions) {
        this._waitForExist(options);
        this.get$().frameLoaded();
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
        this._waitForExistAndDisplayed(options);
        if (typeof text === 'string') {
            this.getText().should('include', text);
        } else {
            this.getText().should('match', text);
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

        this.get$().should('have.class', className);

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
            .should('not.have.class', className);

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
            .should('include', attributeValue);
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
        this._waitForExist(option);
        if (!(options && options.reverse)) {
            this._waitForDisplayed(option);
        }
    }

    protected _waitForEnabled(options?: CypressOptions & { element?: Cypress.Chainable<JQuery<HTMLElement>> }) {
        // const negateMsg = options && options.reverse ? ' ' : ' not ';
        // const timeout = options && options.timeout || browser.config.waitforTimeout;
        // const timeoutMsg = `Element "${this.name}" ('${this.selector}') still${negateMsg}enabled after ${timeout}ms`;

        // const element = options && options.element || await this.get$();

        return this._waitForLogWrapper(() => {
            if (options && options.element) {
                return options.element.should('be.enabled');
            } else {
                return this.get$(options).should('be.enabled');
            }
        });
    }

    protected _waitForDisplayed(options?: CypressOptions & { element?: Cypress.Chainable<JQuery<HTMLElement>> }) {
        // const negateMsg = options && options.reverse ? ' ' : ' not ';
        // const timeout = options && options.timeout || browser.config.waitforTimeout;
        // const timeoutMsg = `Element "${this.name}" ('${this.selector}') still${negateMsg}displaying after ${timeout}ms`;

        // const element = options && options.element || await this.get$();
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
        // const negateMsg = options && options.reverse ? ' ' : ' not ';
        // const timeout = options && options.timeout || browser.config.waitforTimeout;
        // const timeoutMsg = `Element "${this.name}" ('${this.selector}') still${negateMsg}existing after ${timeout}ms`;

        // const element = options && options.element ||  this.get$();
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
        }, 'teeeeeeeeeeeeeeeeeest');
    }


    protected _waitForLogWrapper(_waitForFunction: any, msg?: string) {
        try {
            return _waitForFunction();
        } catch (e) {
            cy.log(`Element error "${this.name}": ${e.message}`);
            throw e;
        }
    }
}
