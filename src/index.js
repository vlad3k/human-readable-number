module.exports = function toReadable (number) {
    if (number === 0) return 'zero';
    return getNumber(number).trim();
};

function getNumber(number) {
    if (number === 0) return '';

    if (number < 20) {
        return word = numeral.get(number);
    }
    if (number < 100) {
        return word = numbers.get(Math.floor(number / 10)) + ' ' + getNumber(number % 10);
    }
    if (number < 1000) {
        return word = numeral.get(Math.floor(number / 100)) + ' hundred' + ' ' + getNumber(number % 100);
    }
}

const numeral = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
]);

const numbers = new Map([
    [2, 'twenty'],
    [3, 'thirty'],
    [4, 'forty'],
    [5, 'fifty'],
    [6, 'sixty'],
    [7, 'seventy'],
    [8, 'eighty'],
    [9, 'ninety']
]);


