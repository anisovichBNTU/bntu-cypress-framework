export type CypressOptions = Partial<Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow>
    & { delay?: number }
    & { reverse?: boolean } | undefined;
export interface ElementOptions {
    intoIFrame?: boolean;
    frameSelector?: string;
    text?: string;
    parent?: boolean;
    parentSelector?: string;
    childSelector?: string;
    index?: number;
}

export interface SelectOptions {
    dropdownListSelector?: string,
    dropdownListItemSelector?: string
}