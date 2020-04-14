module.exports = function parseStringAsArray(arrayAsString) {
    if(arrayAsString)
        return arrayAsString.split(',').map(str => str.trim());
}