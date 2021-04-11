export default class BasePage {
    
    pageUrl: string | RegExp;

    constructor(pageUrl: string | RegExp) {
        this.pageUrl = pageUrl;
    }

    async validateUrl() {
        const thisPathname = this.pageUrl;
        cy.url({timeout: 10000}).should('to.match', thisPathname)
    }

}