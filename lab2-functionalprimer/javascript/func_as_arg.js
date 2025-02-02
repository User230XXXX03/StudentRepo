// Create list of ints from a to b
function arrFunc(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;    
}

function applicatorFunc(inpFunc, s, a, b) {
    const arr = inpFunc(a, b);
    if (s == 's') {
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum;
    } else if (s == 'a') {
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum / arr.length;
    } else {
        throw new Error("Invalid operation");
    }
}

let a = 1;
let b = 10;
let x = applicatorFunc(arrFunc, 'a', a, b); // Call applicatorFunc with arrFunc, 'a', a, and b as args
console.log(x);