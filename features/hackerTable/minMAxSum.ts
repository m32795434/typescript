// Given five positive integers, find the minimum and maximum values that can be calculated 
// by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
function miniMaxSum(arr: number[]): void {
    const lenght = arr.length;
    const sumas: number[] = [];
    let actualSum = 0;
    for (let i = 0; i < lenght; i++) {
        actualSum = arr.reduce((acum, current) => acum + current, 0);
        actualSum = actualSum - arr[i];
        sumas.push(actualSum);
    }
    sumas.sort((a, b) => a - b)
    console.log(sumas[0], sumas[lenght - 1]);
}
//other: it`s simplest:

function miniMaxSum2(arr: number[]): void {
    const arrLenght = arr.length;
    const arrSorted = arr.sort((a, b) => a - b);
    const [min, max] = [arrSorted[0], arrSorted[arrLenght - 1]];
    const suma = arr.reduce((sum, val) => {
        return (sum + val);
    }, 0);
    console.log((suma - max), (suma - min));
}
miniMaxSum([1, 2, 3, 4, 5, 20])
miniMaxSum2([1, 2, 3, 4, 5, 20])