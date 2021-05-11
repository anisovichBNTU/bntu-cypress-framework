const RandomString = function() {

    this.getString = function(length = 10, obligatoryChar = '') {
        let str = obligatoryChar;
        let randomchar = function() {
            let n = Math.floor(Math.random() * 62);
            if (n < 10) return n;
            if (n < 36) return String.fromCharCode(n + 55);
            return String.fromCharCode(n + 61);
        }
        while (str.length < length) str += randomchar();
        return str;
    }

};
module.exports = new RandomString();