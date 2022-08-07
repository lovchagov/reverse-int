module.exports = function reverse (n) {
    const num = Number(Math.abs(n).toString().split('').reverse().join(''));
    return num
}

