chai.Assertion.addChainableMethod('equalPartAndExist', function(expectedPart, existFields) {
    let obj = chai.util.flag(this, 'object');
    let isEqual = false;

    function check(obj, expectedPart, existFields) {
        let isEqual = true;
        for (const key in expectedPart) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] !== expectedPart[key]) {
                    cy.log(`Value '${obj[key]}' not equal '${expectedObj[key]}'`, 'ERROR');
                    return false;
                }
            } else {
                cy.log(`Actual object not have property '${key}'`, 'ERROR');
                return false
            }
        }
        if (existFields instanceof Array) {
            existFields.forEach(field => {
                if (!obj.hasOwnProperty(field)) {
                    cy.log(`Actual object not have property '${key}'`, 'ERROR');
                    return false;
                }
            });
        } else {
            isEqual = obj.hasOwnProperty(existFields)
        }
        cy.log(`Objects are equal - ${isEqual}`);
        return isEqual;
    }
    isEqual = check(obj, expectedPart, existFields)
    new chai.Assertion(isEqual).to.be.true;
});

chai.Assertion.addChainableMethod('equalWithRegEx', function(expectedObj) {
    let obj = chai.util.flag(this, 'object');
    let isEqual = false;

    function bypassObject(obj, expectedObj) {
        let isEqual = false;
        for (const key in expectedObj) {
            if (!obj.hasOwnProperty(key)) {
                cy.log(`Actual object not have property '${key}'`, 'ERROR');
                return false;
            }

            if (expectedObj[key] instanceof RegExp) {
                if (expectedObj[key].test(obj[key])) {
                    isEqual = true
                } else {
                    cy.log(`Value '${obj[key]}' not equal RegEx '${expectedObj[key]}'`, 'ERROR');
                    return false;
                }
            } else if (expectedObj[key] instanceof Object) {
                bypassObject(obj[key], expectedObj[key]);
            } else {
                if (obj[key] === expectedObj[key]) {
                    isEqual = true
                } else {
                    cy.log(`Value '${obj[key]}' not equal '${expectedObj[key]}'`, 'ERROR');
                    return false;
                }
            }
        }
        cy.log(`Objects are equal - ${isEqual}`);
        return isEqual;
    }
    isEqual = bypassObject(obj, expectedObj)
    new chai.Assertion(isEqual).to.be.true;
});