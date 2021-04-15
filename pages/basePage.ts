import headerForm from "../forms/headerForm";

export default class BasePage {
    headerForm: typeof headerForm;
    pageUrl: string | RegExp;

    constructor(pageUrl: string | RegExp) {
        this.pageUrl = pageUrl;
        this.headerForm = headerForm;
    }

    async validateUrl() {
        const thisPathname = this.pageUrl;
        cy.url().should('to.match', thisPathname)
    }

}