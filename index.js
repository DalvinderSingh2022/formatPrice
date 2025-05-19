/**
 * Formats a price with the given currency symbol.
 * @param {string} symbol - The currency symbol.
 * @param {number} price - The price number.
 * @returns {string} Formatted price string.
 */
function formatPrice(symbol = "$", price = 0) {
    if (typeof price !== 'number' || price === 0 || isNaN(price)) {
        return symbol + ' 0';
    }
    if (price < 0) {
        return '-' + symbol + ' ' + Math.abs(price);
    }
    return symbol + ' ' + price;
}

module.exports = formatPrice;
