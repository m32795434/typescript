/*
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.*/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    let [countPosit, countCero, countNeg] = [0, 0, 0];
    const lenght = arr.length;
    arr.forEach((el) => {
        if (el > 0) {
            countPosit++;
        } else if (el < 0) {
            countNeg++;
        } else {
            countCero++;
        }
    })
    console.log(((countPosit) / lenght).toFixed(6));
    console.log(((countNeg) / lenght).toFixed(6));
    console.log(((countCero) / lenght).toFixed(6));
}



function main() {
    const n: number = parseInt(readLine().trim(), 10);//number or items in the array

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}