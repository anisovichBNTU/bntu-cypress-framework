import dialogForm from "../forms/dialogForm";
import headerForm from "../forms/headerForm";

export default class BasePage {
    headerForm: typeof headerForm;
    dialogForm: typeof dialogForm;
    pageUrl: string | RegExp;

    constructor(pageUrl: string | RegExp) {
        this.pageUrl = pageUrl;
        this.headerForm = headerForm;
        this.dialogForm = dialogForm;
    }

    async validateUrl() {
        const thisPathname = this.pageUrl;
        cy.url().should('to.match', thisPathname)
    }

}