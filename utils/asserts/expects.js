require('./customAsserts')

const Expects = function() {

    this.isExist = function(actual, msg) {
        cy.log(`Checking exist`);
        expect(actual, msg).to.exist;
    }

    this.equal = function(actual, expected, msg) {
        cy.log(`Checking equal`);
        expect(actual, msg).to.deep.equal(expected);
    }

    this.equalWithRegEx = function(actual, expected, msg) {
        cy.log(`Equal actual and expected object with RegEx`);
        expect(actual, msg).to.equalWithRegEx(expected);
    }

    this.includeString = function(string, includedString, msg) {
        cy.log(`Checking string '${includedString}' in the string '${string}'`);
        expect(string, msg).to.have.string(includedString);
    }

    this.includeArray = function(array, childArray, msg) {
        cy.log(`Checking included child array in the array`);
        expect(array, msg).to.include.deep.members(childArray);
    }

    this.include = function(array, value, msg) {
        cy.log(`Checking included '${value}' in the '${array}'`);
        expect(array, msg).to.include(value);
    }

    this.isEmpty = function(actual, msg) {
        cy.log(`Checking object is empty`);
        expect(actual, msg).to.be.empty;
    }

    this.equalPartAndExist = function(actual, expectedPart, existFields, msg) {
        cy.log(`Equal part object and exist fields in actual object`);
        expect(actual, msg).to.equalPartAndExist(expectedPart, existFields)
    }

};

module.exports = new Expects();