export function reqGET(url) {
    // cy.addLog(`Try do GET request to: "${url}"`, 'WARN');
    cy.request({ url, body, method: 'POST', headers, failOnStatusCode: false });
}

export function reqPOST(url, body, headers) {
    // cy.addLog(`Try do POST request to: "${url}"\nRequest body: ${JSON.stringify(body)}`, 'WARN');
    cy.request({ url, body, method: 'POST', headers, failOnStatusCode: false });
}

const Requests = function() {
    this.OK = 200;

    this.getStatus = function(response) {
        // cy.addLog(`Return response status`);
        const status = response.status;
        return status;
    }

    this.getHeaders = function(response) {
        // cy.addLog(`Return response headers`);
        const headers = response.headers;
        return headers;
    }

    this.getHeader = function(response, headerProperty) {
        // cy.addLog(`Return response header by property '${headerProperty}'`);
        const headerValue = response.headers[headerProperty];
        return headerValue;
    }

    this.getBody = function(response) {
        // cy.addLog(`Return response body`);
        const body = response.body;
        return body;
    }

    this.getBodyAsJson = function(response) {
        // cy.addLog(`Return JSON response body`);
        const body = response.body;
        return JSON.parse(body);
    }

    this.getBodyElementByField = function(response, property, value) {
        // cy.addLog(`Try find element in response body array by property: '${property} = ${value}'`, 'WARN');
        const body = this.getBody(response);
        for (let i = 0; i < body.length; i++) {
            if (body[i][property] === value) {
                // cy.addLog(`Successful search`);
                return body[i];
            };
        }
        // cy.addLog(`Element with property: '${property} = ${value}' not found in response body array. Return '{}'`, 'ERROR');
        return {};
    }

};

module.exports = new Requests();