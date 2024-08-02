module.exports = function reverse (n) {
    const str = n.toString();
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    if (n < 0) {
        reversedStr = reversedStr.slice(0, reversedStr.length - 1);
    }

    return reversedStr;
}