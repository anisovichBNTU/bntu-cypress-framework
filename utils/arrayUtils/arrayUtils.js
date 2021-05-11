const ArrayUtils = function() {

    this.sortArrayOfObject = function(array, sortableField, ascendingSort = true) {
        function compareValues(key, ascendingSort = true) {
            return function innerSort(a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    return 0;
                }

                const varA = (typeof a[key] === 'string') ?
                    a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string') ?
                    b[key].toUpperCase() : b[key];

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (!ascendingSort) ? (comparison * -1) : comparison
                );
            };
        }
        return array.sort(compareValues(sortableField, ascendingSort));
    }

};
module.exports = new ArrayUtils();