module.exports = function reverse (n) {
    let str = n.toString();
    let reversedStr = '';

    if (n < 0) {
        str = str.slice(1, str.length);
    }

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}