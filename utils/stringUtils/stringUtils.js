const StringUtils = function() {

    this.getDateString = function() {
        const date = new Date();
        return `${date.getUTCFullYear()}.${date.getUTCMonth() + 1}.${date.getUTCDate()}-${date.getUTCHours()}.${date.getUTCMinutes()}.${date.getUTCSeconds()}`
    }

    this.cutString = function(string, length) {
        return string.slice(0, length);
    }

    this.toLowerCaseJSON = function(object) {
        return JSON.parse(JSON.stringify(object).toLowerCase());
    }

    this.base64ToHex = function(base64String) {
        const raw = atob(base64String);
        let result = '';
        for (let i = 0; i < raw.length; i++) {
            const hex = raw.charCodeAt(i).toString(16);
            result += (hex.length === 2 ? hex : '0' + hex);
        }
        return result.toUpperCase();
    }

};

module.exports = new StringUtils();