'use strict'
module.exports = function detect(a) {
    if (typeof a === 'number') {
        return 'number';
    }
    if (typeof a === 'string') {
        return 'string';
    }
}
