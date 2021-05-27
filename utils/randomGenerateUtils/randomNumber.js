const RandomNumber = function() {
    this.getRandomNumberArray = function(length, maxNumber, minNumber = 0, excludedElements = []) {
        let arr = [];
        for (minNumber; minNumber < maxNumber; minNumber++) {
            if (!excludedElements.includes(minNumber)) {
                arr.push(minNumber);
            }
        }

        return this.shuffle(arr).splice(0, length);
    }

    this.getRandomNumber = function(maxNumber, minNumber = 0) {
        return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
    }

    this.shuffle = function(array) {
        let currentIndex = array.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = this.getRandomNumber(currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}

module.exports = new RandomNumber();