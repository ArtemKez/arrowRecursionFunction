const power = (num, exp) => {
    if (exp === 1) {
        return num;
    }
    if (exp === -1) {
        return 1 / num;
    }

    return exp > 1
        ? num * power(num, exp - 1)
        : 1 / num * power(num, exp + 1);
}

power(2, 3);

const pairBrackets = (num) => {
    if (num <= 1) {
        return '()'
    }

    return `(${pairBrackets(num - 1)})`
}

function minAndMaxFromArray(arr) {
    arr = arr.filter(n => !isNaN(n))
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return {min, max};
}

const multiplication = (...args) => {
    return args.reduce((acc, val) => acc * val, 1)
}