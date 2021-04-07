export class Element {
    protected selector: string;
    readonly name: string;

    /**
     * The element
     * @param selector - the selector to the element
     * @param name - the name of the element
     */
    constructor(selector: string, name: string, text?: string) {
        this.selector = selector;
        this.name = name;
    }

    protected get$(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.selector)
    }

    /**
     * Click the element
     */
    async click() {
        this.get$()
            .click();
    }

    /**
     * Set value to the element (input)
     * @param value
     * @param options
     */
    async setValue(value: string, options?: { keys: boolean }) {
        this.get$()
            .click()
            .type(value);
    }

}