const Asserts = function() {

    this.equal = function(actual, expected, msg) {
        actual.should('eq', expected, msg);
        cy.log(`Checking equal`);
    }

    this.equalDate = function(actual, expected, msg) {
        actual.then(text => {
            expect(Date(text), msg).to.deep.equal(Date(expected));
        });
        cy.log(`Checking equal date text`);
    }

    this.include = function(actual, value, msg) {
        actual.should('include', value, msg)
        cy.log(`Checking include`);
    }

    this.haveProperty = function(actual, property, value, msg) {
        actual.should('have.deep.property', property, value, msg)
        cy.log(`Checking object have property '${property}' with value '${value}'`);
    }

    this.isExist = function(element, msg) {
        element.should('exist', msg)
        cy.log(`Check is element exist`);
    }

    this.isNotExist = function(element, msg) {
        element.should('not.exist', msg)
        cy.log(`Check is element not exist`);
    }

    this.isVisible = function(element, msg) {
        element.should('be.visible', msg)
        cy.log(`Check is element visible`);
    }

    this.isNotVisible = function(element, msg) {
        element.should('not.be.visible', msg)
        cy.log(`Check is element not visible`);
    }

    this.haveClass = function(element, className, msg) {
        element.should('have.class', className, msg)
        cy.log(`Check is element have class '${className}'`);
    }

}

module.exports = new Asserts();