// Given an array of integers, where all elements but one occur twice, find the unique element.
function reducerA(arr: number[]) {
    const result = arr.reduce((reduced: any, value: number): any => {
        reduced[value] = reduced[value] ? reduced[value] + 1 : 1;
        return reduced;
    }, {});
    return result;
}
function lonelyinteger(a: number[]): number {
    const reduced = reducerA(a);
    let item = 0;
    for (let prop in reduced) {
        if (reduced[prop] === 1) {
            item = Number.parseInt(prop);
        }
    }
    return item;
}
console.log(lonelyinteger([1, 1, 1, 2, 2, 3, 5, 3, 3, 5, 5, 2, 3, 5, 15]));

// other: but, where all elements but one occur twice!!!The xor simplifies the code!
function lonelyinteger2(a: number[]) {
    let result = 0;
    for (let m of a) {
        result = result ^ m;
    }
    console.log(result);
}
lonelyinteger2([8, 1, 1, 2, 2, 3, 5, 8, 3, 5, 15])