export default class BasePage {
    
    pageUrl: string | RegExp;

    constructor(pageUrl: string | RegExp) {
        this.pageUrl = pageUrl;
    }

    async validateUrl() {
        const thisPathname = this.pageUrl;
        cy.url().should('to.match', thisPathname)
    }

}