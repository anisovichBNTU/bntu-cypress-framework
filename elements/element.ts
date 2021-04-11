type CypressOptions = Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow> & { reverse: boolean } | undefined

export class Element {
    protected selector: string;
    readonly name: string;
    readonly text: string | undefined;

    /**
     * The element
     * @param selector - the selector to the element
     * @param name - the name of the element
     * @param text - the text contains of the element
     */
    constructor(selector: string, name: string, text?: string) {
        this.selector = selector;
        this.name = name;
        this.text = text;
    }

    protected get$(options?: CypressOptions): Cypress.Chainable<JQuery<HTMLElement>> {
        if (!this.text) {
            return cy.get(this.selector, options);
        } else {
            return cy.get(this.selector, options).contains(this.text);
        }

    }

    /**
     * Click the element
     */
    click() {
        this.get$()
            .click();
    }

    /**
     * Set value to the element (input)
     * @param value
     * @param options
     */
    setValue(value: string, options?: { keys: boolean }) {
        this.get$()
            .click()
            .type(value);
    }

    /**
     * Clear the element (input)
     */
    clearValue() {
        this.get$()
            .clear();
    }

    /**
     * Scroll into view of the current element. It's useful to force to play animation on some elements.
     */
    scrollIntoView() {
        this.get$()
            .scrollIntoView()
    }

    /**
     * Wait until the element exist and displayed
     */
    _waitForExistAndDisplayed(options?: CypressOptions) {
        this.waitForExist(options);
        this.waitForDisplayed(options);
    }

    /**
     * Wait until the element is displayed
     */
    waitForDisplayed(options?: CypressOptions) {
        const isReverse = options && options.reverse
        const shouldOption = isReverse ? 'not.' : '';

        this.get$(options)
            .should(`${shouldOption}be.visible`)
    }

    /**
     * Wait until the element is exist
     */
    waitForExist(options?: CypressOptions) {
        const isReverse = options && options.reverse
        const shouldOption = isReverse ? 'not.' : '';

        this.get$(options)
            .should(`${shouldOption}exist`)
    }

    /**
     * Wait until innerText matches
     * @param text - the expression to be matched
     * @param options - the wait options
     */
    waitUntilInnerTextMatches(text: string, options?: CypressOptions) {
        this._waitForExistAndDisplayed(options);

        this.get$().invoke('text').should('include', text);

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
}
