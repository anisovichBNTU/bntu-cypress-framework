export type CypressOptions = Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow> & { reverse?: boolean } | undefined;
export interface ElementOptions {
    intoIFrame?: boolean;
    frameSelector?: string;
    text?: string;
    parentSelector?: string;
}