/*Returns
int[2]: An array with the numbers of times she broke her records. Index0 is for breaking most points records, and index 1 is for breaking least points records. */
'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
    let min = scores[0];
    let max = scores[0];
    let [countMax, countMin] = [0, 0];
    const lenght = scores.length;
    for (let i = 1; i < lenght; i++) {
        if (scores[i] > max) {
            max = scores[i];
            countMax++;
        }
        if (scores[i] < min) {
            min = scores[i];
            countMin++;
        }
    }
    return [countMax, countMin];
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const scores: number[] = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result: number[] = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}